const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync('index.html')

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello, World');
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-type':'text/html; charset-utf8'});
        res.end(HTML);
    } else if (req.url === '/about') {
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
    } else {
        res.write('lalala');
    }
    res.end();
}).listen(3001,  function() {
    console.log('Server at http://localhost:3001');
})