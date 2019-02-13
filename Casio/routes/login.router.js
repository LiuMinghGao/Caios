const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get('/login',(req,res)=>{
  var name=req.query.uname;
  var pwd=req.query.upwd;
  if(!name){
   res.send("用户名不能为空");
   return;
  }
  if(!pwd){
   res.send("密码不能为空");
   return;
  }
   pool.query("SELECT count(uid) as c,uid FROM cs_user WHERE uname=? AND upwd=md5(?)",[name,pwd],(err,result)=>{
   if(err) throw err;
    var c=result[0].c;
    if(c==1){
      req.session.uid=result[0].uid;
      res.send("1");
    }else{
      res.send("0")
    }
 });
});
module.exports=router;