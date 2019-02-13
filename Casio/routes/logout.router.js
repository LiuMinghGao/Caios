const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/logout",(req,res)=>{
	req.session.uid=null;
	res.send({code:1,msg:"退出成功"});
		console.log(req.session.uid)
})
module.exports=router;