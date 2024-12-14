const { createServer } = require('node:http');

const hostname = '16.171.176.106';
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