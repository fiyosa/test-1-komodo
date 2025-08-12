require('dotenv').config();
// -hehe
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const responseData = {
      test: 'test-1',
      app: process.env.APP_NAME || 'DefaultApp',
      user: process.env.APP_USERNAME || 'anonymous'
    };
    res.end(JSON.stringify(responseData));
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About us: We are Node.js enthusiasts.');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found.');
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
