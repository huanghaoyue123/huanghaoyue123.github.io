$(".notice .nav li").mouseenter(function () {
    sessionStorage.index = $(this).index()
    notice();
})

function notice() {
    var index = sessionStorage.index;
    $(".notice .nav li").eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
    $(".notice .main ul").eq(index)
        .show()
        .siblings()
        .hide();
}
notice();
