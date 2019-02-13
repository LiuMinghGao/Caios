const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/detele",(req,res)=>{
	var id=parseInt(req.query.id);
    pool.query("DELETE FROM cs_cart WHERE id=?",[id],(err,result)=>{
       if(err)throw err;
       if(result.affectedRows>0){
        res.send({code:1,msg:"删除成功"});
       }else{
        res.send({code:-1,msg:"删除失败"});
       }
   })
})
module.exports=router;