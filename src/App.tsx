import { useEffect, useState } from "react";
import "./App.css";

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

type RequestComment = {
  id: string;
  author_role: string;
  comment: string;
  created_at: string;
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

  // State Komentar
  const [comments, setComments] = useState<RequestComment[]>([]);
  const [commentRole, setCommentRole] = useState("Administrator");
  const [comment, setComment] = useState("");

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
    try {
      const response = await fetch("/api/requests");
      const result = await response.json();
      setRequests(result.data ?? []);
    } catch (error) {
      console.error("Gagal memuat daftar laporan:", error);
    }
  }

  async function loadDashboard() {
    try {
      const response = await fetch("/api/dashboard");
      const result = await response.json();
      setDashboard(result);
    } catch (error) {
      console.error("Gagal memuat statistik dashboard:", error);
    }
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

      await loadComments(id);

      setSelectedCategory(result.category);
      setSelectedPriority(result.priority);

      if (result.status === "ASSIGNED") {
        setSelectedStatus("IN_PROGRESS");
      } else if (result.status === "IN_PROGRESS") {
        setSelectedStatus("RESOLVED");
      } else if (result.status === "RESOLVED") {
        setSelectedStatus("CLOSED");
      } else {
        setSelectedStatus(result.status);
      }
    } catch (error) {
      console.error("Gagal memuat detail laporan:", error);
    } finally {
      setLoadingDetail(false);
    }
  }

  async function loadComments(id: string) {
    try {
      const response = await fetch(`/api/requests/${id}/comments`);
      const result = await response.json();
      setComments(result.data ?? []);
    } catch (error) {
      console.error("Gagal memuat komentar:", error);
    }
  }

  async function reviewRequest() {
    if (!selectedRequest) return;

    try {
      const response = await fetch(
        `/api/requests/${selectedRequest.id}/review`,
        {
          method: "PATCH",
          headers: {
            "x-role": "Administrator",
          },
        },
      );

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
    } catch (error) {
      console.error("Error saat review laporan:", error);
    }
  }

  async function saveAssignment() {
    if (!selectedRequest) return;

    try {
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
    } catch (error) {
      console.error("Error saat menyimpan penugasan:", error);
    }
  }

  async function assignTechnician() {
    if (!selectedRequest) return;

    try {
      const response = await fetch(
        `/api/requests/${selectedRequest.id}/assign`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-role": "Administrator",
          },
          body: JSON.stringify({
            technician_id: selectedTechnician,
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
        status: result.status,
      });

      setSelectedStatus("IN_PROGRESS");

      await loadRequests();
      await loadDashboard();
    } catch (error) {
      console.error("Error saat menugaskan teknisi:", error);
    }
  }

  async function updateStatus() {
    if (!selectedRequest) return;

    try {
      const response = await fetch(
        `/api/requests/${selectedRequest.id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-role": "Technician",
          },
          body: JSON.stringify({
            status: selectedStatus,
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
        status: result.status,
      });

      if (result.status === "IN_PROGRESS") {
        setSelectedStatus("RESOLVED");
      } else if (result.status === "RESOLVED") {
        setSelectedStatus("CLOSED");
      }

      await loadRequests();
      await loadDashboard();
    } catch (error) {
      console.error("Error saat memperbarui status:", error);
    }
  }

  async function submitComment() {
    if (!selectedRequest) return;

    try {
      const response = await fetch(
        `/api/requests/${selectedRequest.id}/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author_role: commentRole,
            comment: comment,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.error ?? "Gagal mengirim komentar.");
        return;
      }

      setComment("");
      await loadComments(selectedRequest.id);
      alert(result.message ?? "Komentar berhasil dikirim!");
    } catch (error) {
      console.error("Terjadi kesalahan koneksi:", error);
    }
  }

  useEffect(() => {
    loadRequests();
    loadDashboard();
  }, []);

  async function submitRequest(event: React.FormEvent) {
    event.preventDefault();
    setMessage("");

    try {
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
    } catch (error) {
      console.error("Error saat mengirim laporan baru:", error);
      setMessage("Terjadi kesalahan jaringan.");
    }
  }

  return (
    <main className="app">
      <header className="hero">
        <div className="hero-overlay">
          <h1>Campus Service Request</h1>
          <p>Laporkan masalah fasilitas kampus.</p>
        </div>
      </header>

      {/* Perubahan Langkah 6.1: Dashboard Statistik Modern */}
      <section className="dashboard">
        <h2 className="section-title">📊 Dashboard Statistik</h2>
        <div className="dashboard-grid">
          <div className="dashboard-card status-card">
            <div className="card-icon">📄</div>
            <h3>Status</h3>
            <h1>{dashboard.status.length}</h1>
            <div className="progress">
              <div className="progress-fill blue"></div>
            </div>
          </div>

          <div className="dashboard-card category-card">
            <div className="card-icon">🏷</div>
            <h3>Kategori</h3>
            <h1>{dashboard.category.length}</h1>
            <div className="progress">
              <div className="progress-fill green"></div>
            </div>
          </div>

          <div className="dashboard-card priority-card">
            <div className="card-icon">⚡</div>
            <h3>Prioritas</h3>
            <h1>{dashboard.priority.length}</h1>
            <div className="progress">
              <div className="progress-fill orange"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Tambah Laporan */}
      <form className="report-form" onSubmit={submitRequest}>
        <div className="form-group">
          <label>
            Judul
            <input
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Deskripsi
            <textarea
              className="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Lokasi
            <input
              className="input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Kategori
            <select
              className="select"
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
        </div>
        <button type="submit" className="btn-primary">
          Kirim Laporan
        </button>
      </form>

      {message && <div className="success-banner">✓ {message}</div>}

      <hr />

      {/* Daftar Laporan Modern Wrapper */}
      <section className="table-card">
        <div className="table-header">
          <h2>📋 Daftar Laporan</h2>
        </div>

        {requests.length === 0 ? (
          <p style={{ padding: "20px" }}>Belum ada laporan.</p>
        ) : (
          <div className="table-wrapper">
            <table className="report-table">
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
                    <td>
                      <span className="badge category">{item.category}</span>
                    </td>
                    <td>
                      <span className="badge priority">{item.priority}</span>
                    </td>
                    <td>
                      <span
                        className={`badge status ${item.status.toLowerCase()}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn-detail"
                        type="button"
                        onClick={() => loadRequestDetail(item.id)}
                      >
                        👁 Lihat Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <hr />

      {/* Bagian Detail Laporan */}
      {loadingDetail ? (
        <p>Memuat detail...</p>
      ) : selectedRequest ? (
        <>
          <section className="detail-card">
            <div className="detail-title">
              <h2>📄 Detail Laporan</h2>
            </div>
            <div className="detail-grid">
              <div className="detail-item">
                <span>📄 Nomor Tiket</span>
                <strong>{selectedRequest.request_number}</strong>
              </div>
              <div className="detail-item">
                <span>📝 Judul</span>
                <strong>{selectedRequest.title}</strong>
              </div>
              <div className="detail-item">
                <span>📋 Deskripsi</span>
                <strong>{selectedRequest.description}</strong>
              </div>
              <div className="detail-item">
                <span>📍 Lokasi</span>
                <strong>{selectedRequest.location}</strong>
              </div>
              <div className="detail-item">
                <span>🏷 Kategori Saat Ini</span>
                <span className="badge category">
                  {selectedRequest.category}
                </span>
              </div>
              <div className="detail-item">
                <span>⚡ Prioritas Saat Ini</span>
                <span className="badge priority">
                  {selectedRequest.priority}
                </span>
              </div>
              <div className="detail-item">
                <span>📌 Status</span>
                <span
                  className={`badge status ${selectedRequest.status.toLowerCase()}`}
                >
                  {selectedRequest.status}
                </span>
              </div>
            </div>
            {selectedRequest.status === "CLOSED" && (
              <div className="success-box" style={{ marginTop: "20px" }}>
                ✅ Tiket telah selesai dan ditutup.
              </div>
            )}

            {/* Form Pengaturan Kategori & Prioritas (Admin Panel) */}
            {selectedRequest.status === "UNDER_REVIEW" && (
              <div className="admin-panel" style={{ marginTop: "25px" }}>
                <h4>Atur Penugasan (Administrator)</h4>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>
                    <strong>Kategori:</strong>
                  </label>
                  <select
                    className="select"
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

                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>
                    <strong>Prioritas:</strong>
                  </label>
                  <select
                    className="select"
                    value={selectedPriority}
                    onChange={(e) => setSelectedPriority(e.target.value)}
                  >
                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>
                  </select>
                </div>

                <button
                  className="btn-primary"
                  type="button"
                  onClick={saveAssignment}
                >
                  Simpan Perubahan
                </button>
              </div>
            )}

            {/* Panel Penugasan Teknisi */}
            {selectedRequest.status === "UNDER_REVIEW" && (
              <div className="tech-assign-panel" style={{ marginTop: "25px" }}>
                <h4>Penugasan Teknisi</h4>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>
                    <strong>Teknisi:</strong>
                  </label>
                  <select
                    className="select"
                    value={selectedTechnician}
                    onChange={(e) => setSelectedTechnician(e.target.value)}
                  >
                    <option value="TECH-001">Andi</option>
                    <option value="TECH-002">Budi</option>
                    <option value="TECH-003">Charlie</option>
                  </select>
                </div>

                <button
                  className="btn-primary"
                  type="button"
                  onClick={assignTechnician}
                >
                  Tugaskan Teknisi
                </button>
              </div>
            )}

            {/* Panel Update Status (Teknisi) */}
            {(selectedRequest.status === "ASSIGNED" ||
              selectedRequest.status === "IN_PROGRESS" ||
              selectedRequest.status === "RESOLVED") && (
              <div
                className="status-update-panel"
                style={{ marginTop: "25px" }}
              >
                <h4>Update Status (Teknisi)</h4>
                <div className="form-group" style={{ marginBottom: "15px" }}>
                  <label>
                    <strong>Status:</strong>
                  </label>
                  <select
                    className="select"
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

                <button
                  className="btn-primary"
                  type="button"
                  onClick={updateStatus}
                >
                  Update Status
                </button>
              </div>
            )}

            {/* UI Komentar */}
            <hr />
            <section className="comment-card">
              <h2 className="section-title">💬 Komentar</h2>
              <div className="comment-form">
                <select
                  value={commentRole}
                  onChange={(e) => setCommentRole(e.target.value)}
                >
                  <option>Pelapor</option>
                  <option>Administrator</option>
                  <option>Technician</option>
                  <option>Manager</option>
                </select>

                <textarea
                  placeholder="Tulis komentar..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />

                <button
                  type="button"
                  className="btn-primary"
                  onClick={submitComment}
                >
                  ✈ Kirim Komentar
                </button>
              </div>
            </section>

            {/* Daftar Riwayat Komentar */}
            <section className="history-card">
              <h2 className="section-title">🕒 Riwayat Komentar</h2>
              {comments.length === 0 ? (
                <p>Belum ada komentar.</p>
              ) : (
                comments.map((item, index) => (
                  <div key={index} className="comment-item">
                    <div className="avatar">{item.author_role.charAt(0)}</div>
                    <div className="comment-body">
                      <h3>{item.author_role}</h3>
                      <p>{item.comment}</p>
                      <small>{item.created_at}</small>
                    </div>
                  </div>
                ))
              )}
            </section>

            {/* Tombol Kontrol Bawaan & Tombol Kembali */}
            <div
              className="action-buttons"
              style={{ display: "flex", gap: "10px", marginTop: "20px" }}
            >
              {selectedRequest.status === "SUBMITTED" && (
                <button
                  className="btn-primary"
                  type="button"
                  onClick={reviewRequest}
                >
                  Review Laporan
                </button>
              )}

              <button
                type="button"
                className="btn-back"
                onClick={() => setSelectedRequest(null)}
              >
                ← Kembali
              </button>
            </div>
          </section>
        </>
      ) : (
        <p>Pilih salah satu laporan untuk melihat detail.</p>
      )}
    </main>
  );
}
