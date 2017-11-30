/*
JS里用for循环求出从1到100相加的结果
var i = 0;
for(var j=1;j<=100;j++){
i +=j;
}
alert(i);
*/

var sum = 0;
for(var i=0;i<$("nav li").length;i++){
    var width = $("nav li").eq(i).width();
    sum += width;
    console.log(sum)
}

$("nav ul").width(sum+"px");

$(".down").bind("click",function(){
    if($("nav ul").width() == sum){
        $("nav ul").width("auto");
        $(this).text("︿")
    }else{
        $("nav ul").width(sum+"px");
        $(this).text("﹀")
    }
})

$("nav li").bind("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
})