import { useEffect, useState } from "react";

type ServiceRequest = {
  id: string;
  request_number: string;
  title: string;
  description: string;
  location: string;
  category: string;
  priority: string;
  status: string;
};

export default function App() {
  const [requests, setRequests] = useState<ServiceRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<ServiceRequest | null>(
    null,
  );
  const [loadingDetail, setLoadingDetail] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Internet");
  const [message, setMessage] = useState("");

  async function loadRequests() {
    const response = await fetch("/api/requests");
    const result = await response.json();
    setRequests(result.data ?? []);
  }

  async function loadRequestDetail(id: string) {
    setLoadingDetail(true);
    try {
      const response = await fetch(`/api/requests/${id}`);
      const result = await response.json();
      if (!response.ok) {
        alert(result.error ?? "Laporan tidak ditemukan.");
        return;
      }
      setSelectedRequest(result);
    } finally {
      setLoadingDetail(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function submitRequest(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");

    const response = await fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, location, category }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error ?? "Laporan gagal dibuat.");
      return;
    }

    setMessage(`Laporan berhasil dibuat: ${result.requestNumber}`);
    setTitle("");
    setDescription("");
    setLocation("");
    setCategory("Internet");
    await loadRequests();
  }

  return (
    <main
      style={{
        maxWidth: 1000,
        margin: "40px auto",
        padding: 20,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Campus Service Request</h1>
      <p>Laporkan masalah fasilitas kampus.</p>

      <form onSubmit={submitRequest}>
        <p>
          <label>
            Judul
            <br />
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
        </p>
        <p>
          <label>
            Deskripsi
            <br />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Lokasi
            <br />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Kategori
            <br />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Internet</option>
              <option>AC</option>
              <option>Peralatan Kelas</option>
              <option>Kebersihan</option>
              <option>Lainnya</option>
            </select>
          </label>
        </p>
        <button type="submit">Kirim Laporan</button>
      </form>

      {message && (
        <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>
      )}

      <hr />
      <h2>Daftar Laporan</h2>

      {requests.length === 0 ? (
        <p>Belum ada laporan.</p>
      ) : (
        <table
          border={1}
          cellPadding={8}
          style={{ width: "100%", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>Nomor</th>
              <th>Judul</th>
              <th>Lokasi</th>
              <th>Kategori</th>
              <th>Prioritas</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item) => (
              <tr key={item.id}>
                <td>{item.request_number}</td>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>{item.category}</td>
                <td>{item.priority}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => loadRequestDetail(item.id)}
                  >
                    Lihat Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <hr />
      <h2>Detail Laporan</h2>

      {loadingDetail ? (
        <p>Memuat detail...</p>
      ) : selectedRequest ? (
        <div
          style={{
            border: "1px solid #ccc",
            padding: 20,
            borderRadius: 8,
            marginTop: 20,
          }}
        >
          <p>
            <strong>Nomor Tiket:</strong> {selectedRequest.request_number}
          </p>
          <p>
            <strong>Judul:</strong> {selectedRequest.title}
          </p>
          <p>
            <strong>Deskripsi:</strong> {selectedRequest.description}
          </p>
          <p>
            <strong>Lokasi:</strong> {selectedRequest.location}
          </p>
          <p>
            <strong>Kategori:</strong> {selectedRequest.category}
          </p>
          <p>
            <strong>Prioritas:</strong> {selectedRequest.priority}
          </p>
          <p>
            <strong>Status:</strong> {selectedRequest.status}
          </p>
          <button type="button" onClick={() => setSelectedRequest(null)}>
            Kembali
          </button>
        </div>
      ) : (
        <p>Pilih salah satu laporan untuk melihat detail.</p>
      )}
    </main>
  );
}
