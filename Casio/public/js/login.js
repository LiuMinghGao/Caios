/**
 * Created by Administrator on 2019/1/2.
 */
//登录没有正则验证
$(":submit").click(function(e){
    if(($("#uname").val()=="" || $("#upwd").val()=="")){
        e.preventDefault()
    }else{
        //用户名或密码不为空的时候发送登录请求
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
       $.ajax({
           url:"http://127.0.0.1:3009/login",
           type:"get",
           //参数与后台接收的变量相同，可写一个
           data:{uname,upwd},
           dataType:"json",
           success:function(result){
              if(result=="1"){
                //登录成功，三秒倒计时回首页
                var i=4;
                var n=setInterval(function(){
                     i--;
                     if(i==0){
                        clearInterval(n);
                        window.location.href="http://127.0.0.1:3009/index.html";
                     }
                      $("#success").css("display","block");
                      $("#success").html(` <p>登录成功，${i}秒后跳回首页</p>`)
                },1000);
                }else
                   alert("登录失败")
           }
       })
   }
})

//用户名input为空时移出样式，原本样式位display:none
$("#uname").blur(function(){
    if($(this).val()=="")
        $(this).next().next().removeClass()
});
//同上
$("#upwd").blur(function(){
    if($(this).val()=="")
        $(this).next().next().removeClass()
});



