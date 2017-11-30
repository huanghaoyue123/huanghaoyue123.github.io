$(".nav-right a").hover(a, b)
function a() {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
}
function b() {
    $(this)
        .removeClass("active")
}
