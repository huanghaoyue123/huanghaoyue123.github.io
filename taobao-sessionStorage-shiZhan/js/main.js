$(".notice .nav li").mouseenter(function () {
//console.log($(this).index())
//console.log(sessionStorage.index)
    sessionStorage.index = $(this).index();
    sss();
});

function sss() {
    $(".notice .nav li").eq(sessionStorage.index)
        .addClass("active")
        .siblings()
        .removeClass("active");

    $(".notice .main ul").eq(sessionStorage.index)
        .css("display", "block")
        .siblings()
        .css("display", "none");
    
    if (sessionStorage.index == 0) {
    var l0 = document.querySelectorAll(".nav li")[0].offsetLeft;
        $(".notice .nav .b").css("transform", "translateX("+l0+"px)");
    }
    if (sessionStorage.index == 1) {
    var l1 = document.querySelectorAll(".nav li")[1].offsetLeft;
        $(".notice .nav .b").css("transform", "translateX("+l1+"px)");
    }
    if (sessionStorage.index == 2) {
    var l2 = document.querySelectorAll(".nav li")[2].offsetLeft;
        $(".notice .nav .b").css("transform", "translateX("+l2+"px)");
    }
    if (sessionStorage.index == 3) {
    var l3 = document.querySelectorAll(".nav li")[3].offsetLeft;
        $(".notice .nav .b").css("transform", "translateX("+l3+"px)");
    }
    if (sessionStorage.index == 4) {
    var l4 = document.querySelectorAll(".nav li")[4].offsetLeft;
        $(".notice .nav .b").css("transform", "translateX("+l4+"px)");
    }
}
sss();