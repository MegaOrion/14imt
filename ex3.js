const request = require("request");

  
request.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3", (err, res, body) => {   
    console.log(JSON.parse(body));
});