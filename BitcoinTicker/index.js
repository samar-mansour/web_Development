const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyparser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    //console.log(req.body.crypto);


    var crypto = req.body.crypto;
    var fiat = req.body.fiat;


    var baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";

    var finalURL = baseURL + crypto + fiat;

    //sending regular request
    request(finalURL, function(error, response,body ){
    

    var data = JSON.parse(body);
    //return the last price of the bitcoin
    var price = data.last;

    //return the average price of the week
    var averagePrice = data.averages.week;

    //current date
    var currentDate = data.display_timestamp;

    console.log(price);
    console.log(averagePrice);

    //send one response
    //res.send("<h1>The Price of" + crypto +" is "+ price + " " + fiat+"</h1>");

    //To sent more than one response
    res.write("<p>The current date is " + currentDate + "</p>");
    res.write("<h1>The Price of" + crypto +" is "+ price + fiat+"</h1>");
    res.send();
    });
});

//sending pramaters 




app.listen(3000, function(){
    console.log("Server runniong on port 3000");
});