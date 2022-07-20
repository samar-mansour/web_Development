const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

//static method to lets up be able to link our images and css file
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Get-Post: Home Rouht
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;

    var data= {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);

    var options = {
        url: "https://us14.api.mailchimp.com/3.0/lists/be099684a2",
        method: "POST",
        headers:{
            "Authorization": "samar1 f3933c66fedcdd7b17704089e070fdc6-us14"
        },
        body: jsonData
    };

    request(options, function(error, response, body){
        if(error){
            res.sendFile(__dirname + "/failure.html");
        }
        else {
            if (response.statusCode == 200) {
                res.sendFile(__dirname + "/success.html");
            }
            else{
                res.sendFile(__dirname + "/failure.html");
            }
        }

    });

});

app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
});

//API key: 
//f3933c66fedcdd7b17704089e070fdc6-us14

//List ID
//be099684a2