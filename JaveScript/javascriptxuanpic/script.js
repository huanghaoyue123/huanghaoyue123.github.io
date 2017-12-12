//当HTML和图片加载完成之后才执行代码
window.onload = function() {
    // 创建一个函数 f() 传递四个参数 分别是 a d e c
    function f(a, d, e, c) {

        a.style.transition = d;
        e.call(a);
        if (c) {
            var b = false;
            a.addEventListener("transitionend",
                function() {
                    b || (c.call(a), b = true);
                    a.removeEventListener("transitionend", c, false)
                },
                false)
        }
    }

    //声明一个变量 a，选中所有的 图片，为一个数组集合
    var a = document.querySelectorAll("img");

    //声明一个变量 g 不等于0的时候布尔值为 true
    var g = true;

    //点击按钮的时候，执行函数
    document.querySelector(".btn").onclick = function() {

        //创建一个函数 h
        function h() {
            for (var b = 0; b < a.length; b++) a[b].style.transition = "",
                a[b].style.transform = "rotateY(0deg) translateZ(-" + 500 * Math.random() + "px)",
                function(b) {
                    setTimeout(function() {
                            f(a[b], "2s",
                                function() {
                                    this.style.opacity = 1;
                                    this.style.transform = "rotateY(-360deg) translateZ(0)"
                                },
                                function() {
                                    e++;
                                    e == a.length && (g = true)
                                })
                        },
                        1000 * Math.random())
                } (b)
        }

        //如果g等于 true 则执行里面的内容
        if (g) {

            g = false;
            for (var d = 0,
                     e = 0,
                     c = 0; c < a.length; c++)(function(b) {
                setTimeout(function() {
                        f(a[b], "10ms",
                            function() {
                                a[b].style.transform = "scale(0)"
                            },
                            function() {
                                f(this, "1s",
                                    function() {
                                        this.style.transform = "scale(1)";
                                        this.style.opacity = 0
                                    },
                                    function() {
                                        d++;
                                        d == a.length && h()
                                    })
                            })
                    },
                    1000 * Math.random())
            })(c)
        }

    }

};