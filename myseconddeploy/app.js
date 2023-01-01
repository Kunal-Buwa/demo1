const express = require ("express");
const app = express();


 app.get("/",function(req,resp)
 {
//     if(err)
//     {
//         console.log("cant connect");
//         resp.status(500).send("cant connect");
//     }
//     else{
        resp.send("welcom to my page")
    // }
})

app.get("/home",function(req,resp){
    resp.sendFile("public/index.html",{root:__dirname});
})
app.listen(8000);
console.log("started at server 8000")