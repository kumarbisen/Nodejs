// step-1 npm init 
// then Go through the every question 
// step-2 install the any package( Like Express, native modules)
// step-3 ctrl+c (to end the server)
const express = require('express')
const app = express()
const port = 3000

app.listen(3000, function () {
    console.log("server is running on the port 3000");
    
});

app.get("/", function(req, res){
    res.send("Hello World")
});

app.get("/contact", function(req, res){
    res.send("<h1>contact us on viv966128@gmail.com</h1>")
});

app.get("/about", function(req, res){
    res.send("<h1>HELLO MR VIVEK BISEN</h1>")
});


