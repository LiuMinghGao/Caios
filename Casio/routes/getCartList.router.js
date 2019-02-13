const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/getCartList",(req,res)=>{
   var uid=req.session.uid;
   pool.query("SELECT d.title,d.sm_img,c.count,c.id,c.did,c.price FROM cs_details d,cs_cart c WHERE d.did = c.did AND c.uid=?",[uid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result});
    })
  })
module.exports=router;