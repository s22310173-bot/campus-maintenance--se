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

  // State untuk form pembuatan laporan baru
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Internet");
  const [message, setMessage] = useState("");

  // State untuk pengeditan Kategori & Prioritas di Detail Laporan
  const [selectedCategory, setSelectedCategory] = useState("Internet");
  const [selectedPriority, setSelectedPriority] = useState("MEDIUM");
  const [selectedTechnician, setSelectedTechnician] = useState("TECH-001");
  const [selectedStatus, setSelectedStatus] = useState("IN_PROGRESS");

  // State untuk data statistik dashboard
  const [dashboard, setDashboard] = useState<{
    status: { status: string; total: number }[];
    category: { category: string; total: number }[];
    priority: { priority: string; total: number }[];
  }>({
    status: [],
    category: [],
    priority: [],
  });

  async function loadRequests() {
    const response = await fetch("/api/requests");
    const result = await response.json();
    setRequests(result.data ?? []);
  }

  async function loadDashboard() {
    const response = await fetch("/api/dashboard");
    const result = await response.json();
    setDashboard(result);
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

      // Sinkronisasi nilai awal dropdown di bagian detail
      setSelectedCategory(result.category);
      setSelectedPriority(result.priority);

      // Mengatur nilai default dropdown status secara dinamis berdasarkan status saat ini
      if (result.status === "ASSIGNED") {
        setSelectedStatus("IN_PROGRESS");
      } else if (result.status === "IN_PROGRESS") {
        setSelectedStatus("RESOLVED");
      } else if (result.status === "RESOLVED") {
        setSelectedStatus("CLOSED");
      } else {
        setSelectedStatus(result.status);
      }
    } finally {
      setLoadingDetail(false);
    }
  }

  async function reviewRequest() {
    if (!selectedRequest) return;

    const response = await fetch(`/api/requests/${selectedRequest.id}/review`, {
      method: "PATCH",
      headers: {
        "x-role": "Administrator",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error);
      return;
    }

    setSelectedRequest({
      ...selectedRequest,
      status: result.status,
    });

    setRequests((prev) =>
      prev.map((item) =>
        item.id === selectedRequest.id
          ? { ...item, status: result.status }
          : item,
      ),
    );

    alert(result.message);
    await loadDashboard();
  }

  async function saveAssignment() {
    if (!selectedRequest) return;

    const response = await fetch(
      `/api/requests/${selectedRequest.id}/assignment`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-role": "Administrator",
        },
        body: JSON.stringify({
          category: selectedCategory,
          priority: selectedPriority,
        }),
      },
    );

    const result = await response.json();

    if (!response.ok) {
      alert(result.error);
      return;
    }

    alert(result.message);

    setSelectedRequest({
      ...selectedRequest,
      category: result.category,
      priority: result.priority,
    });

    await loadRequests();
    await loadDashboard();
  }

  async function assignTechnician() {
    if (!selectedRequest) return;

    const response = await fetch(`/api/requests/${selectedRequest.id}/assign`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-role": "Administrator",
      },
      body: JSON.stringify({
        technician_id: selectedTechnician,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error);
      return;
    }

    alert(result.message);

    setSelectedRequest({
      ...selectedRequest,
      status: result.status,
    });

    // Otomatis ubah nilai dropdown status berikutnya setelah ditugaskan
    setSelectedStatus("IN_PROGRESS");

    await loadRequests();
    await loadDashboard();
  }

  async function updateStatus() {
    if (!selectedRequest) return;

    const response = await fetch(`/api/requests/${selectedRequest.id}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-role": "Technician",
      },
      body: JSON.stringify({
        status: selectedStatus,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      alert(result.error);
      return;
    }

    alert(result.message);

    setSelectedRequest({
      ...selectedRequest,
      status: result.status,
    });

    // Sinkronisasi dropdown status untuk tahap alur selanjutnya
    if (result.status === "IN_PROGRESS") {
      setSelectedStatus("RESOLVED");
    } else if (result.status === "RESOLVED") {
      setSelectedStatus("CLOSED");
    }

    await loadRequests();
    await loadDashboard();
  }

  useEffect(() => {
    loadRequests();
    loadDashboard();
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
    await loadDashboard();
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

      <hr />
      <h2>Dashboard Statistik</h2>
      <div
        style={{
          display: "flex",
          gap: 30,
          marginBottom: 30,
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>Status</h3>
          <ul>
            {dashboard.status.map((item) => (
              <li key={item.status}>
                {item.status} : {item.total}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Kategori</h3>
          <ul>
            {dashboard.category.map((item) => (
              <li key={item.category}>
                {item.category} : {item.total}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Prioritas</h3>
          <ul>
            {dashboard.priority.map((item) => (
              <li key={item.priority}>
                {item.priority} : {item.total}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Form Tambah Laporan */}
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
            <strong>Kategori Saat Ini:</strong> {selectedRequest.category}
          </p>
          <p>
            <strong>Prioritas Saat Ini:</strong> {selectedRequest.priority}
          </p>
          <p>
            <strong>Status:</strong> {selectedRequest.status}
          </p>

          {/* Form Pengaturan Kategori & Prioritas (Admin Panel) - Diperbaiki hanya untuk UNDER_REVIEW */}
          {selectedRequest.status === "UNDER_REVIEW" && (
            <div
              style={{
                marginTop: 20,
                padding: 15,
                background: "#f5f5f5",
                borderRadius: 6,
                border: "1px dashed #bbb",
              }}
            >
              <h4 style={{ marginTop: 0 }}>Atur Penugasan (Administrator)</h4>
              <div style={{ marginBottom: 10 }}>
                <label style={{ marginRight: 10 }}>
                  <strong>Kategori:</strong>{" "}
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option>Internet</option>
                  <option>AC</option>
                  <option>Peralatan Kelas</option>
                  <option>Kebersihan</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div style={{ marginBottom: 15 }}>
                <label style={{ marginRight: 10 }}>
                  <strong>Prioritas:</strong>{" "}
                </label>
                <select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                >
                  <option>LOW</option>
                  <option>MEDIUM</option>
                  <option>HIGH</option>
                </select>
              </div>

              <button type="button" onClick={saveAssignment}>
                Simpan Perubahan
              </button>
            </div>
          )}

          {/* Panel Penugasan Teknisi - Hanya Muncul saat UNDER_REVIEW */}
          {selectedRequest.status === "UNDER_REVIEW" && (
            <div
              style={{
                marginTop: 20,
                padding: 15,
                background: "#eef6ff",
                border: "1px dashed #6aa9ff",
                borderRadius: 6,
              }}
            >
              <h4 style={{ marginTop: 0 }}>Penugasan Teknisi</h4>

              <div style={{ marginBottom: 15 }}>
                <label style={{ marginRight: 10 }}>
                  <strong>Teknisi:</strong>
                </label>

                <select
                  value={selectedTechnician}
                  onChange={(e) => setSelectedTechnician(e.target.value)}
                >
                  <option value="TECH-001">Andi</option>
                  <option value="TECH-002">Budi</option>
                  <option value="TECH-003">Charlie</option>
                </select>
              </div>

              <button type="button" onClick={assignTechnician}>
                Tugaskan Teknisi
              </button>
            </div>
          )}

          {/* Panel Update Status (Teknisi) - Hanya Muncul saat ASSIGNED, IN_PROGRESS, atau RESOLVED */}
          {(selectedRequest.status === "ASSIGNED" ||
            selectedRequest.status === "IN_PROGRESS" ||
            selectedRequest.status === "RESOLVED") && (
            <div
              style={{
                marginTop: 20,
                padding: 15,
                background: "#fff8e8",
                border: "1px dashed orange",
                borderRadius: 6,
              }}
            >
              <h4 style={{ marginTop: 0 }}>Update Status (Teknisi)</h4>

              <div style={{ marginBottom: 15 }}>
                <label style={{ marginRight: 10 }}>
                  <strong>Status:</strong>
                </label>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {selectedRequest.status === "ASSIGNED" && (
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                  )}

                  {selectedRequest.status === "IN_PROGRESS" && (
                    <option value="RESOLVED">RESOLVED</option>
                  )}

                  {selectedRequest.status === "RESOLVED" && (
                    <option value="CLOSED">CLOSED</option>
                  )}
                </select>
              </div>

              <button type="button" onClick={updateStatus}>
                Update Status
              </button>
            </div>
          )}

          {/* Banner Pemberitahuan Setelah Status Menjadi CLOSED */}
          {selectedRequest.status === "CLOSED" && (
            <div
              style={{
                marginTop: 20,
                padding: 15,
                background: "#e6f4ea",
                color: "#137333",
                fontWeight: "bold",
                borderRadius: 6,
                border: "1px solid #137333",
              }}
            >
              ✓ Tiket telah selesai dan ditutup.
            </div>
          )}

          {/* Tombol Kontrol Bawaan */}
          <div style={{ marginTop: 20 }}>
            {/* Tombol Review - Hanya Muncul saat SUBMITTED */}
            {selectedRequest.status === "SUBMITTED" && (
              <button
                type="button"
                onClick={reviewRequest}
                style={{ marginRight: 10 }}
              >
                Review Laporan
              </button>
            )}

            <button type="button" onClick={() => setSelectedRequest(null)}>
              Kembali
            </button>
          </div>
        </div>
      ) : (
        <p>Pilih salah satu laporan untuk melihat detail.</p>
      )}
    </main>
  );
}
