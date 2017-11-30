/*
 当鼠标移动到主题市场的当前鼠标所在的li的时候
 显示右侧的第一个 .li  其余隐藏
 当鼠标移动到主题市场的第二个li的时候
 显示右侧的第二个 .li  其余隐藏
 */


//获取li个数
var navLingth = $(".nav-left-hd .nav li").length
for (var i = 0; i < navLingth; i++) {
    $(".nav-left-hd .list>ul")
        .append('<li class="li"></li>')
        .find("li").eq(i).addClass("li" + i)
}


var getNavJSON;
var j;
getNavJSON = $.getJSON("json/nav.json", function () {
    j = getNavJSON.responseJSON;
})
var i;
//绑定一次事件为鼠标导航的 nav 的li
$(".nav-left-hd .nav li").one("mouseenter", function () {
    var $this = $(this)
    var index = $this.index()
    $(".nav-left-hd .list .li").eq(index)
        .load("ajax/ajax" + index + ".html", index, function () {
            i = index
            console.log(i)
            for (; i < j.length; i++) {
                if (!$(".list > ul > li").eq(i).hasClass("plus")) {
                    for (var ii = 0; ii < j[i].length; ii++) {

                        $($(".list").find(".li" + i).find(".list-key")[ii]).find(".list-dec>ul").addClass("getJSON_" + i + "_" + ii)
                        for (var iii = 0; iii < j[i][ii].length; iii++) {
                            $(".getJSON_" + i + "_" + ii + "").append('<li><a href="">' + j[i][ii][iii].name + '</a></li>')
                        }
                    }
                    $(".list > ul > li").eq(index).addClass("plus")
                }
            }

        })
})


//鼠标经过 导航 li的时候
$(".nav-left-hd .nav li").mouseenter(function () {

        var $this = $(this)
        var index = $this.index()

        $this.addClass("active").siblings().removeClass("active")

        $(".nav-left-hd .list .li").eq(index).show()
            .siblings().hide()
    }
)


//鼠标离开的事件
$(".nav-left-hd").mouseleave(function () {
    $(".nav-left-hd .list .li").hide()
    $(".nav-left-hd .nav li").removeClass("active")
})
