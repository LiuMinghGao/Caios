/**
 * Created by Administrator on 2019/1/3.
 */

/**用户名**/

//定义一个变量，不符合登录条件为false  则true
var b=true;
$(":text").blur(function (){
    //鼠标移出，发送请求，验证用户名是否存在
    var reg=/^\d{6}$/;
    if($(this).val()==""){
        $(this).next().next().html("用户名不能为空");
        b=false;
    }else if(!reg.test($(this).val())){
        $(this).next().next().html("用户名必须6位")
        $(this).next().next().css("color","red")
        b=false;
    }else{
        var uname=$(":text").val();
        $.ajax({
            //输入规则符合，发送验证验证用过名是否存在
            url:"http://127.0.0.1:3009/exist",
            type:"get",
            data:{uname},
            dataType:"json",
            success:function(result) {
                if(result.code<0){
                    $(":text").next().next().html("用户名已存在");
                    $(":text").next().next().css("color","red");
                    b=false;
                }else{
                    $(":text").next().next().html("可以使用");
                    $(":text").next().next().css("color","green");
                    b=true;
                }
            }
        })
       
    }
});

/**密码**/
$(".first :password").blur(function (){
    var reg=/^\d{6}$/;
    if($(this).val()=="") {
        $(this).next().next().html("密码不能为空");
        b=false;
    }else if(!reg.test($(this).val())){
        $(this).next().next().html("密码必须6位")
        $(this).next().next().css("color","red")
        b=false;
    }else{
        $(this).next().next().html("密码可以使用");
        $(this).next().next().css("color","green");
        b=true;
    }
})


/**确认密码**/
$(".last :password").blur(function(){
    var reg=/^\d{6}$/;
    if($(this).val()=="") {
        $(this).next().next().html("确认密码不能为空");
        $(this).next().next().css("color","red");
        b=false;
    }else if(!($(this).val()==$(".first :password").val()) || !reg.test($(this).val())){
        $(this).next().next().html("两次输入不一致,请重新输入")
        $(this).next().next().css("color","red");
        b=false;
    }else{
        $(this).next().next().html("两次输入一致，可以注册");
        $(this).next().next().css("color","green");
        b=true;
    }
})
//复选按钮
var $checkbox=$(":checkbox")
/**注册按钮**/
$("button").click(function(e){
    //当筛选条件不符合或者复选未选中阻止发送请求
    if(b==false || !($checkbox.prop("checked"))){
        e.preventDefault();
    }else{
        var uname=$(":text").val();
        var upwd=$(".first :password").val();
        var upwd2=$(".last :password").val();
        $.ajax({
            url:"http://127.0.0.1:3009/register",
            type:"get",
            data:{uname,upwd},
            dataType:"json",
            success:function(result) {
                console.log(typeof result.code);
                if(result.code>=1){
                    alert("注册成功，点击确定跳转到登录页面");
                    window.location.href="http://127.0.0.1:3009/login.html";
                }
            }
        })

    }
})
