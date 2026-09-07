const fs = require('fs');
const http = require('http');
const c = fs.readFileSync('index.html', 'utf8');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(c);
});
server.listen(8766, () => console.log('Server at http://localhost:8766'));
