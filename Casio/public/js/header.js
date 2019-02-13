/**
 * Created by Administrator on 2018/12/20.
 */
function header(){
    //后台验证用户是否登录，是：把用户名，购物车的数量填充到页mian
    $.ajax({
        url: "http://127.0.0.1:3009/check/sf_login",
        type: "get",
        dataType: "json",
        success: function(result){
           if(result!="-1"){
            var a=0;
            for(var p of result.count){
                a+=parseInt(p.count);
            }
            var nav=`
                    <a href="shop_cart.html">
                        <img class="ml-1 mt-3 mb-3" src="img/fixed1.png" alt=""/>
                        <p class="ml-2 text-white">购</p>
                        <p class="ml-2 text-white">物</p>
                        <p class="ml-2 text-white mb-2">车</p>
                        <div class="my_shuzi text-center mb-2">${a}</div>
                    </a>`;
              $(".header_my_list").html(nav);
             var header=`
                <ul class="list-unstyled">
                <li><a href="vip.html">欢迎您！${result.uname[0].uname}</a></li>
                <li><a href="register.html">注册</a></li>
                <li><a href="javascript:;">积分值</a></li>
                <li><img src="img/shoop.png" alt=""/><a href="shop_cart.html">购物车</a><a href="shop_cart.html">${a}</a></li>
                </ul>`
              $(".my_list2").html(header); 
            }
        }
    })
    //动态插入头部
    $.ajax({
        url:"http://127.0.0.1:3009/header.html",
        type:"get",
        success:function(res){
            $("<link rel='stylesheet' href='../css/header.css'/>").appendTo("head");
            //把头部网页放到其他页面，id为header的页面
            $(res).replaceAll("#header");
            //hover事件
            //鼠标进入
            $("[data-trigger=dropdown]").parent().mouseover(function(){
                $(this).children(":last-child").show();
            })
            //鼠标移出
            .mouseout(function(){
                $(this).children(":last-child").hide();
            }).children(":last-child").hide();
            //导航栏固定
            window.onscroll=function(){
                var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
                if(scrollTop>=100){
                    $("#header2").css({
                        "position":"fixed",
                        "top":"0",
                        "background":"#fff",
                        "width":"1349px"
                    });
                }else{
                    $("#header2").css({
                        "position":"",
                        "top":"",
                        "background":"",
                        "width":""
                    });
                }
                if (scrollTop>= 100 && scrollTop <= 3320)
                    myfixed.style.display = "block";
                else
                    myfixed.style.display = "none";
            };
        }
    })
};
header();


