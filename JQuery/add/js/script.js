/*
*
* .input input[type=submit]
* */

$(".input input[type=submit]").bind("click",Vinput);
$(".input input[type=text]").bind("keypress",function(){
    ///event.keyCode按的建的代码,13表示回车 32空格
    if(event.keyCode == "13"){
        Vinput()
    }
});

function Vinput(){
    var value = $(".input input[type=text]").val();
    if( value !== ""){
        var add  = '<li>'+value+'<span>DEL</span></li>';
        $(add).hide().prependTo(".list ul").slideDown();
        $(this).prev().val("");

        $(".list ul span").click(function(){
            $(this).parent()
                .stop().animate({right:'-50px'},300,function(){
                $(this)
                    .delay(150).animate({right:'300px',opacity:'0'},500,function(){
                    $(this).remove()
                })
            })
        });

    }else{
        alert("请填写内容后再提交。")
        $(this).prev().focus();
    }
}