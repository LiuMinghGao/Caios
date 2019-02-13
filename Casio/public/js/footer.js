/**
 * Created by Administrator on 2018/12/20.
 */
$(function(){
    //动态引入尾部
    $.ajax({
        url:"http://127.0.0.1:3009/footer.html",
        type:"get",
        success:function(res){
            $("<link rel='stylesheet' href='../css/footer.css'/>").appendTo("head");
            $(res).replaceAll("#footer");
        }
    })

})


