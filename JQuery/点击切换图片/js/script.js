$(function () {
    //调用 jQuery unslider 插件
    $(".banner").unslider({
        speed: 300,    //速度
        delay: 3000,   //切换
        autoplay:true, //自动滑块
        infinite:true  //无限滑块
    })
    //修改 Prev 和 Next
    $(".unslider .prev").text("<")
    $(".unslider .next").text(">")
})
