const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/",(req,res)=>{
	 var i=0;
	 var obj={};
   pool.query("select * from cs_index_carousel",(err,result)=>{
		 if(result.length>0){
           i+=50;
		obj.carousel=result
		 }
		 if(i==100){
           res.send(obj)
		 }
	 });
	 pool.query("select * from cs_index_product",(err,result)=>{
		 if(result.length>0){
           i+=50;
		obj.product=result
		 }
		 if(i==100){
           res.send(obj)
		 }
	 })
});
module.exports=router;