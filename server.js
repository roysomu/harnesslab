const http = require('http');

const PORT = process.env.PORT || 8080;

function getWelcomeHtml(name = 'Harness SE Candidate') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Harness Lab</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: #0b1120;
      color: #f8fafc;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .card {
      background: #1e293b;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
      border: 1px solid #334155;
      text-align: center;
      max-width: 480px;
    }
    h1 { color: #38bdf8; margin-bottom: 0.5rem; }
    p { color: #94a3b8; font-size: 1rem; line-height: 1.5; }
    .badge {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.35rem 0.75rem;
      background: #0369a1;
      color: #e0f2fe;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Welcome to Harness Lab</h1>
    <p>Application successfully deployed and running on Kubernetes.</p>
    <div class="badge">Candidate: ${name}</div>
  </div>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(getWelcomeHtml());
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = { server, getWelcomeHtml };
