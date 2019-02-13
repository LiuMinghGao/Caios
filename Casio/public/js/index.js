/**
 * Created by Administrator on 2018/12/12.
 */
//��http://localhost:3009/index����get����
$.ajax({
    url:"http://127.0.0.1:3009/index",
    type:"get",
    dataType:"json",
    success:function(result){
        /**轮播**/
        var carhtml=`<a class="show" href=""><img data-target="a1" class="w-100" src="${result.carousel[0].img}"/></a>
        <a href=""><img class="w-100" data-target="a2" src="${result.carousel[1].img}"/></a>
        <a href=""><img class="w-100" data-target="a3" src="${result.carousel[2].img}"/></a>
        <a href=""><img class="w-100" data-target="a4" src="${result.carousel[3].img}"/></a>`;
        $("#slider").html(carhtml);
         /**大商品**/
        var bigprohtml=`<p class="mt-4 text-white text-center p-1 bg-danger new">NEW</p>
        <a href="${result.product[0].href}"><img class="w-100" src="${result.product[0].pic}"/></a>
        <div>
        <h5 class="font-weight-bold ml-2"><a href="${result.product[0].href}">${result.product[0].title}</a></h5>
        <h3 class="text-danger ml-3 font-weight-bold">￥${result.product[0].price.toFixed(2)}</h3>
        </div>`
        $(".product_big").html(bigprohtml);
        /**小商品**/
        var smallprohtml="";
        for(var p of result.product.slice(1)){
            smallprohtml+=`<div class="product_small">
            <a href="${p.href}"><img src="${p.pic}" alt=""/></a>
            <div>
            <p class="font-weight-bold ml-2"><a href="${p.href}">${p.title}</a></p>
            <h4 class="text-danger ml-1 font-weight-bold">￥${p.price.toFixed(2)}</h4>
            </div>
            </div>`
        }
        $(".product_one").html(smallprohtml);
    }
})



  /**轮播dom**/
function task(){
    var show=document.querySelector("#slider>a.show");
    show.className="";
    if(show.nextElementSibling!=null)
        show.nextElementSibling.className="show";
    else
        show.parentNode.children[0].className="show";
    //$("#slider>a").addClass("show").siblings("a").removeClass("show");
}
var n=setInterval(task,3000);
var div=document.getElementById("slider");
div.onmouseover=function(){
    clearInterval(n);
}
div.onmouseout=function(){
    n=setInterval(task,3000);
}
