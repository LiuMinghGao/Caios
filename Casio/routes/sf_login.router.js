const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/sf_login",(req,res)=>{
	var uid=req.session.uid;
	var count=req.query.count;
	var i=0;
	var obj={};
    pool.query("SELECT uname FROM cs_user WHERE uid=?",[uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			i+=50;
			obj.uname=result;
		}else{
			res.send("-1");
		}
		if(i==100){
			res.send(obj);
		}
	})
	pool.query("SELECT count FROM cs_cart WHERE uid=?",[uid],(err,result)=>{
		if(err) throw err;
		i+=50;
		obj.count=result
		console.log(result);
		if(i==100){
			res.send(obj);
		}
	  })
	





})
module.exports=router;