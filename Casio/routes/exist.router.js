const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/exist", (req, res) => {
  var name = req.query.uname;
  pool.query("SELECT count(uid) as c FROM cs_user WHERE uname=?", [name], (err, result) => {
    if (err) throw err;
    if (result[0].c > 0) {
      res.send({ code: -1, msg: "用户名已存在" })
    } else {
      res.send({ code: 1, msg: "可以注册" })
    }
  })
})
module.exports=router;