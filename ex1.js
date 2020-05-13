const http = require('http');
const fs = require('fs');
const request =  require('request');

let HTML = fs.readFileSync('index.html');

http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello, World');
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-type':'text/html; charset-utf8'});
        res.end(HTML);
        console.log(HTML);
    } else if (req.url === '/about') {
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
    } else if (req.url === '/courses') {

        //ДЗ 15, 2 задание

        request.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3", function(error, response, body) {
            response.on('data', (url) => {
                fs.writeFileSync('index.html',url)
            });
        })
        res.writeHead(200, {'Content-type':'text/html; charset-utf8'});
        res.end(HTML);
    } else {
        res.write('lalala');
    }
    res.end();
}).listen(3001,  function() {
    console.log('Server at http://localhost:3001/courses');
})