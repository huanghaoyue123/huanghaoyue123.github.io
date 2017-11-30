$(".with .title").click(function(){
    $(this)
        .toggleClass("bgpb")
    .next()
        .stop().slideToggle()
})
