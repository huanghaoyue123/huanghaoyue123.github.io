$(document).ready(function () {
    //当鼠标指向右侧，更多产品上
    $(".nav-more").hover(function () {
        //$("#more").show();
        $("#more").fadeIn(100);
    });
    //当鼠标焦点更多产品展开的列表上
    $("#more").hover(function () {
        //$("#more").show();
        //$("#more").fadeIn();
    }, function () {
        //$("#more").hide();
        $("#more").fadeOut(100);
    });
});