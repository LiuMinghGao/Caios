const express=require("express");
const router=express.Router();
const pool=require("../pool");
router.get("/addCart", (req, res) => {
  var uid = req.session.uid;
  var did = parseInt(req.query.did);
  var price = parseFloat(req.query.price);
  var count = parseInt(req.query.count);
    pool.query("SELECT count as c FROM cs_cart WHERE did=? AND uid=?",[did,uid],(err,result)=>{
      if(err) throw err;
      if(result.length>0){
          var count2=result[0].c+count;
          pool.query("UPDATE cs_cart SET count=? WHERE did=? AND uid=?",[count2,did,uid],(err,result)=>{
            if(err) throw err;
            if (result.affectedRows > 0) {
              res.send({ code: 1, msg: "添加成功" });
            }else{
              res.send({ code: -1, msg: "添加失败" });
            }
          })
      }else{
          pool.query("INSERT INTO `cs_cart`(`id`, `uid`,`did`,`price`,`count`) VALUES(null,?,?,?,?)",[uid,did,price,count], (err, result)=>{
            if (err) throw err;
            if (result.affectedRows > 0) {
              res.send({ code: 1, msg: "添加成功" });
            }else{
              res.send({ code: -1, msg: "添加失败" });
            }
        })
      }
})
})
module.exports=router;