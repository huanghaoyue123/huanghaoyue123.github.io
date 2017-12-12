//执行隐藏视频1,2,3,4,5
//v.children[0].style.display = "none";
//v.children[1].style.display = "none";
//v.children[2].style.display = "none";
//v.children[3].style.display = "none";
//v.children[4].style.display = "none";
//执行隐藏视频1,2,3,4,5
//v.children[0].style.display = "block";
//鼠标滑过,热门按钮
menu0.onmouseover = function () {
    for (var i = 0; i < ql; i++) {
        //执行隐藏视频1,2,3,4,5
        v.children[i].style.display = "none";
        //执行清空css样式
        ms[i].children[0].className = "";
    }
    c
    v.children[0].style.display = "block";
    //执行显示当前触发按钮的css样式
    this.className = "active";
}
menu1.onmouseover = function () {
    //显示视频2,隐藏视频1,3,4,5
    for (var i = 0; i < ql; i++) {
        v.children[i].style.display = "none";
        ms[i].children[0].className = "";
    }
    v.children[1].style.display = "block";
    this.className = "active";
}
menu2.onmouseover = function () {
    //显示视频3,隐藏视频1,2,4,5
    for (var i = 0; i < ql; i++) {
        v.children[i].style.display = "none";
        ms[i].children[0].className = "";
    }
    v.children[2].style.display = "block";
    this.className = "active";
}
menu3.onmouseover = function () {
    //显示视频4,隐藏视频1,2,3,5
    for (var i = 0; i < ql; i++) {
        v.children[i].style.display = "none";
        ms[i].children[0].className = "";
    }
    v.children[3].style.display = "block";
    this.className = "active";
}
menu4.onmouseover = function () {
    //显示视频5,隐藏视频1,2,3,4
    for (var i = 0; i < ql; i++) {
        v.children[i].style.display = "none";
        ms[i].children[0].className = "";
    }
    v.children[4].style.display = "block";
    this.className = "active";
}