/**
 * Created by Administrator on 2019/1/3.
 */
var did = location.search.split("=")[1];
function fn(){
   //获取商品详情
   $.ajax({
     url: "http://127.0.0.1:3009/details",
     type: "get",
     data: {did},
     dataType: "json",
     success: function (result) {
         //渲染内容
        var smImgs=JSON.parse(result[0].sm_img);
        var mdImgs=JSON.parse(result[0].md_img);
        var $myLeft = $('.my_left');
        var generateSmImgHtml = function(smImg, mdImg, i){
            return `<img src="${smImg}" data-target="${mdImg}" class="my-small ${i === 0 ? 'my-bor' : ''}"/>`;
        };
        var  smImgHtml = '';
        var mdImgHtml = `<img src="${mdImgs[0]}" class="my-big" alt=""/>`;
        smImgs.forEach(function(smImg, i){
            smImgHtml += generateSmImgHtml(smImg, mdImgs[i], i);
        });
        $myLeft.find('.left-centext').html(mdImgHtml);
        $myLeft.find('.left-centext2').html(smImgHtml);
        //功能
        $("img.my-small").mousemove(function(){
            $(this).addClass("my-bor").siblings().removeClass("my-bor");
            var src=$(this).attr("data-target");
            $(".my-big").attr({src});
        });
        //商品信息
        var a=`<p class="my_font1">
            ${result[0].title}
        <p class="my-p"><span>点击查看</span><a href="">详细试用说明</a></p>`;
        $(".my-a").html(a);

        var b=`<p>
        <span class="my_font ml-3">销售价</span>
        <span class="my_price ml-4">￥${result[0].price.toFixed(2)}</span>
        </p>`
        $(".my-b").html(b);

        var c=`<p class="mb-0">
        <span class="my_font ml-3" >购物积分</span>
        <span class="my_font ml-4">${result[0].integral}</span>
        <a href=""><img class="mb-2 ml-2" src="img/credit.jpg" alt=""/></a>
        </p>`;
        $(".my-c").html(c);

        var d=`<p>
        <span class="my_font ml-4">选择颜色</span>
        <span class="mycall">
            <img class="border border-danger ml-4" src="${smImgs[0]}" alt=""/>
        <span>
        </p>`
        $(".my-d").html(d);
        
   }
   })
    //选项卡
    $(".my_list li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    var index = $(this).index();
    $(this).parent() //teturn ul
        .parent() //return div
        .next() //return div my_p
        .children() //tetuen div my_p 子元素
        .eq(index) //return div my_p 下标
        .show()  //显示
        .siblings() //其他兄弟
        .hide();  //隐藏
    });
    //表格隔行变色
    $("table tr:even").css("background","#f6f6f6");
    //无缝轮播
    setInterval(function(){$(".my-car>ul").animate({
    "margin-left":-790},3000,function(){
    $(".my-car>ul").append($(".my-car>ul").children(":first"))
    $(".my-car>ul").css("margin-left",0)
    })},3000)   
    //添加商品到购物车
    //先验证用户是否登录
    $(".addcart").click(function(){
       $.ajax({
            url: "http://127.0.0.1:3009/check/sf_login",
            type: "get",
            dataType: "json",
            success: function(result){
                if(result=="-1"){
                    alert("请先登录")
                }else{
                    var price=parseInt($("span.my_price").html().slice(1));
                    var count=parseInt($(".my-input").val());
                    $.ajax({
                        url: "http://127.0.0.1:3009/addCart",
                        type: "get",
                        data: {did,price,count},
                        dataType: "json",
                        success: function(res){
                            if(res.code>0){
                            alert("添加成功");
                            header();  
                            }
                        }
                    })
                }
        }
       })
    })
    //商品数量加减
    var i=parseInt($(".my-input").val());
    $(":button").click(function(){
      if($(this).html()=="+")
          i++;
      else if(i>1)
          i--;
     $(".my-input").attr("value",i);
    });
}
fn();






