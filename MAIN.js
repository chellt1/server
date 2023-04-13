const http = require('http');
const fs = require('fs')

// task 1
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
//  task 2
const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, html) => {
    if (err) {
      throw err;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
