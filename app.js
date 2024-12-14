const { createServer } = require('node:http');
const fs = require('fs');

const hostname = '16.171.176.106';
const port = 80 || 3000;

const server = createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    if (url === '/') {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>');
        res.write('My first HTML');
        res.write('</h1>');
        res.write('<form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</buttom></form>');
        res.write('</body>');
        res.write('</html>');
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const message = Buffer.concat(body).toString();
            console.log(body);
            console.log(message);
            fs.writeFileSync('message.txt', message.split('=')[1]);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else {
        res.write('<html>');
        res.write('<body>');
        res.write('<h1>');
        res.write('My first HTML');
        res.write('</h1>');
        res.write('</body>');
        res.write('</html>');
    }

    res.end();
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});