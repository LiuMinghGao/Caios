const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/updateCart",(req,res)=>{
  var did=req.query.did;
  var id = req.query.id;
  var count =req.query.i;
  console.log(did,id,count)
pool.query("UPDATE cs_cart SET count = ? WHERE id=? AND did=?",[count,id,did],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"更新成功"});
    }else{
      res.send({code:-1,msg:"更新失败"});
    }
  })
})

module.exports=router;