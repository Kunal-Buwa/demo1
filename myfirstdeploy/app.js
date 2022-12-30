var express=require("express");
var app=express();
var path = require("path");


app.get("/",function(req,resp){
    resp.send("RAJAT PARK");
});

app.get("/home",function(req,resp){
    resp.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen(8000);
console.log("listening to port 8000")