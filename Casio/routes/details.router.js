const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/details",(req,res)=>{
	var did=req.query.did;
	if(!did){
	  res.send("请提供id")
	}
	pool.query("SELECT * FROM cs_details WHERE did=?",[did],(err,result)=>{
			if(err) throw err;
			res.send(result)
	})
})
module.exports=router;