//importing things
var express = require("express");
var mongoose = require ("mongoose");
var path = require ("path");
var bodyparser=require("body-parser");
var app=express();
var routes=require("./routes/routers");

//doing global join
mongoose.promise=global.promise;


//connection with moongose
const url='mongodb://127.0.0.1:27017/prod'
mongoose.connect(url,{
connectTimeoutMS:1000,
 //useMongoClient:true

},function(err,result){
    if(err)
    {
        console.log("error in connection to server")
    }
    else
    {
       console.log("connection done with server")
    }
 

});

//define middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use("/",routes);

//start the server

app.listen(3000);
console.log("server started at port 3000");
module.exports=app;


