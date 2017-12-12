/*
当鼠标移动到主题市场的当前鼠标所在的li的时候
显示右侧的第一个 .li  其余隐藏
当鼠标移动到主题市场的第二个li的时候
显示右侧的第二个 .li  其余隐藏
*/

//方法的自执行代码
(function(){
    $(".nav-left-hd .nav li").mouseenter(
        function(){
            $(this).addClass("active").siblings().removeClass("active")
            console.log($(this).index())
            var index =  $(this).index()
            $(".nav-left-hd .list .li").eq(index).show().siblings().hide()
        }
    )
}())

//鼠标离开的事件
(function(){
    $(".nav-left-hd").mouseleave(function(){
        $(".nav-left-hd .list .li").hide()
        $(".nav-left-hd .nav li").removeClass("active")
    })
}())
