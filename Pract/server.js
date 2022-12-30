const express=require("express");
var path=require("path");
const app=express();


app.get("/",function(req,res){

    res.send("We will rock you");
});

app.get("/home",function(req,res){
res.sendFile(path.join(__dirname,"public/index.html"));
})

app.listen(8000);
console.log("server listening at port 8000");