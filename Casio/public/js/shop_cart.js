//进入购物车，先调用头部js,查看用户名和购物车数量
header();
$.ajax({
    //验证用户是否登录
    url: "http://127.0.0.1:3009/check/sf_login",
    type: "get",
    dataType: "json",
    success: function(result){
        if(result=="-1"){
            $(".my_mar").css("display","none");
            $(".shopNull").css("display","block") 
        }
    }
})
function fn(){
    $.ajax({
        url: "http://127.0.0.1:3009/getCartList",
        type: "get",
        dataType: "json",
        success:function(res){
           console.log(res.data);
           if(res.data==""){
              $(".my_mar").css("display","none");
              $(".shopNull").css("display","block")
           }
           var mycar="";
           for(var p of res.data){
           var smImgs=JSON.parse(p.sm_img);
           var id=p.id;
           var did=p.did;
           mycar+=
           `<tr>
              <td>&nbsp;&nbsp;&nbsp;<input type="checkbox"/></td>
              <td><img src="${smImgs[0]}" alt=""/></td>
              <td class="font-weight-bold text-dark">${p.title}</td>
               <td>￥${p.price.toFixed(2)}</td>
               <td><button data-id="${p.id}" data-did="${p.did}">-</button><input class="tt" type="text" value="${p.count}"/><button data-id="${p.id}" data-did="${p.did}">+</button></td>
               <td>￥${p.price.toFixed(2)}</td>
               <td><span class="detele" data-id="${p.id}">删除</span></td>
           </tr>`;
           }
           $("#carcontent").html(mycar);
             //删除商品
             $(".detele").click(function(){
              $(this).parent().parent().remove();
               var id=$(this).attr("data-id");
                console.log(id);
                $.ajax({
                    url:"http://127.0.0.1:3009/detele",
                    type:"get",
                    data:{id},
                    dataType: "json",
                    success:function(res){
                        //调用函数更新购物车数量样式
                        fn();
                        header();
                    }
                })
            })
            //删除全部商品
            $(".deleteAll").click(function(){
                $.ajax({
                    url:"http://127.0.0.1:3009/deteleAll",
                    type:"get",
                    dataType:"json",
                    success:function(res){
                     $("table tr").remove();
                     //调用函数更新购物车数量样式
                     fn();
                     header();
                }
              })
            })
            //商品数量
            var total=0;
            var quantity=0;
            var price=$("tbody tr td:nth-child(6)");
            $("tbody button").click(function(){
               var i=parseInt($(this).siblings("input").val());
               if($(this).html()=="+"){
                   i++;
                   var did=$(this).attr("data-did");
                   var id=$(this).attr("data-id");
                  $.ajax({
                    url: "http://127.0.0.1:3009/updateCart",
                    type: "get",
                    data:{i,id,did},
                    dataType: "json",
                    success:function(result){
                         console.log(result);
                    }
                 })
                if($(this).parent().prev().prev().prev().prev().children().prop("checked")){
                      total+=parseInt($(this).parent().prev().html().slice(1));
                      quantitys+=1;
                       $(".mybtn").html(`结算(${quantitys})`);
                      $(".aggregate").html(`订单金额总计:￥${total.toFixed(2)}`);
                   }
               }else if(i>1){
                   i--;
                   var did=$(this).attr("data-id");
                   $.ajax({
                    url: "http://127.0.0.1:3009/updateCart",
                    type: "get",
                    data:{i,id,did},
                    dataType: "json",
                    success:function(result){
                         console.log(result);
                    }
                })
                   if($(this).parent().prev().prev().prev().prev().children().prop("checked")){
                       total-=parseFloat($(this).parent().prev().html().slice(1));
                       quantitys-=1;
                       $(".mybtn").html(`结算(${quantitys})`);
                       $(".aggregate").html(`订单金额总计:￥${total.toFixed(2)}`);
                   }
               }
               $(this).siblings("input").val(i);
               var price=parseFloat($(this).parent().prev().html().slice(1));
               var sub=i*price;
               $(this).parent().next().html(`￥${sub.toFixed(2)}`);
            })
            //全选按钮
            //a未选中的复选
            var a=$("tbody :checkbox:not(:checked)").parent().next().next().next().next().next();
           $(".chbAll").click(function(){
               $("tbody :checkbox").prop("checked",$(this).prop("checked"))
                if($(this).prop("checked")){
                     for(var i=0;i<a.length;i++){
                          total+=parseInt($(a[i]).html().slice(1));
                          quantitys+=parseInt($(a[i]).prev().children(":text").val());
                     }
                }else{
                       a=$("tbody :checkbox:not(:checked)").parent().next().next().next().next().next();
                       total=0;
                       quantitys=0;
                }
               $(".mybtn").html(`结算(${quantitys})`);
               $(".aggregate").html(`订单金额总计:￥${total.toFixed(2)}`);
           });
            //所有复选按钮
            var quantitys=0;
            $("tbody :checkbox").click(function(){
              a=$("tbody :checkbox:not(:checked)").parent().next().next().next().next().next();
              var quantity=parseInt($(this).parent().next().next().next().next().children("input").val());
                if($(this).prop("checked")){
                    for(var i=0;i<a.length;i++){
                    }
                    total+=parseInt($(this).parent().next().next().next().next().next().html().slice(1));
                    quantitys+=quantity;
                    $(".mybtn").html(`结算(${quantitys})`);
                    $(".aggregate").html(`订单金额总计:￥${total.toFixed(2)}`);
                }else{
                    total-=parseInt($(this).parent().next().next().next().next().next().html().slice(1));
                    quantitys-=quantity;
                    $(".mybtn").html(`结算(${quantitys})`);
                    $(".aggregate").html(`订单金额总计:￥${total.toFixed(2)}`);
                }
                if(!$(this).prop("checked")){
                    $(".chbAll").prop("checked",false);
                }else{
                    var unchecked=$("tbody>tr>td:first-child input:not(:checked)")
                    if(unchecked.length>0){
                       $(".chbAll").prop("checked",false)
                    }else{
                       $(".chbAll").prop("checked",true)
                    }
                }
            })
        }
    })
}
fn()




