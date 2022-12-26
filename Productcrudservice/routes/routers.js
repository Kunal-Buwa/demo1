const bodyParser = require("body-parser");
var express=require("express");
var mongoose=require("mongoose");
var schema=mongoose.Schema;
var router=express.Router();
const { modelNames }=require("mongoose");


var product =new schema({
    productNo:Number,
    productName:String,
    productQty:Number


})


var Prod = mongoose.model('product',product,'product');

router.get("/product",function(req,resp){
    Prod.find().exec(function(err,data){
        if(err)
        {
            console.log("no data found");
            resp.status(500).send("no data found");
        }
        else
        {
           console.log(data);
           resp.send(data);
        }
    });
});

router.post("/product", function(req,resp){
    var prodob=new Prod ({productNo:req.body, productName:req.body,productQty:req.body})
     prodob.save(function(err,data)
    {
        if(err)
        {
            console.log("no data added");
            resp.status(500).send("no data added")
        }
        else
        {
            resp.send(data);
        }
    });
});

router.put("/product/:productNo",function(req,resp)
{
    console.log(req.body);
    Prod.findOne({productNo:req.body.productNo},function(err,doc)
    {
        if(err)
        {
            console.log("no data updated");
            resp.status(500).send("no data updated");
        }
        else{
             console.log("in else");
             doc.productNo=req.body.productNo;
             doc.productName=req.body.productName;
             doc.productQty=req.body.productQty;
             doc.save(function(err,data){
                if(err)
                {
                    console.log("no data updated");
                    resp.status(500).send("no data updated");
                }
                else{
                    resp.send(data)
                }
             })
        }
    })

})

router.delete("./product/:productNO",function(err,resp){
    Prod.remove({productNo:req.params.productNo},function(err,doc){
        if(err)
        {
            console.log("no data deleted");
            resp.status(500).send("no data deleted");
        }
        resp.status(200).send("deleted sucessfully")
    })
})



module.exports=router;