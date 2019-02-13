const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get('/register',(req,res)=>{
    var name=req.query.uname;
    var pwd=req.query.upwd;
    var reg=/^\d{6}$/;
    var reg2=/^\d{6}$/;
    if(!reg.test(name)){
        res.send("用户名格式错误");
        return;
    }
    if(!reg2.test(pwd)){
      res.send("密码格式错误");
      return;
    }
    pool.query("INSERT INTO cs_user VALUES(null,?,md5(?))",[name,pwd],(err,result)=> {
        if(err) throw err;
        if (result.affectedRows > 0) {
          res.send({code: 1,msg: "注册成功"})
        } else
          res.send({code: -1, msg: "注册失败"})
      })
})

module.exports=router;