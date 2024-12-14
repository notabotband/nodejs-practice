const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plan');
    res.end('Hello world');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});