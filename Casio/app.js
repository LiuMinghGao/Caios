const express=require('express');
const bodyParser=require('body-parser');
const index=require("./routes/index.router");
const login=require("./routes/login.router");
const register=require("./routes/register.router");
const details=require("./routes/details.router");
const exist=require("./routes/exist.router");
const addCart=require("./routes/addCart.router");
const getCartList=require("./routes/getCartList.router");
const sfLogin=require("./routes/sf_login.router");
const updateCart=require("./routes/updateCart.router");
const logout=require("./routes/logout.router");
const detele=require("./routes/detele.router");
const deteleAll=require("./routes/deteleAll.router");

var app=express();
app.listen(3009);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
 extended:false
}));
//引入模块
const session = require("express-session");
//模块配置
app.use(session({
  secret:"128位随机字符串",   //安全令牌
  resave:false,              //请求保存
  saveUninitialized:true,    //初始化
  cookie:{                   //sessionid保存时
    maxAge:1000*60*60*24     //间1天 cookie
  }
}));
app.use("/index",index);
app.use("/",login);
app.use("/",register);
app.use("/",details);
app.use("/",exist);
app.use("/",addCart);
app.use("/",getCartList);
app.use("/check",sfLogin);
app.use("/",updateCart);
app.use("/",logout);
app.use("/",detele);
app.use("/",deteleAll);

