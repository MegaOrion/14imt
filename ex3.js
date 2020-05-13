const request = require("request");

let data =

request.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3", (err, res, body) => {
    return body;   
});
console.log(data); 