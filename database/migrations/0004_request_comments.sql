CREATE TABLE IF NOT EXISTS request_comments (
    id TEXT PRIMARY KEY,
    request_id TEXT NOT NULL,
    author_role TEXT NOT NULL,
    comment TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (request_id) REFERENCES service_requests(id)
);