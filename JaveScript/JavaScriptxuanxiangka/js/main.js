//按钮
var menu = document.getElementById("menu");
var ms = menu.getElementsByTagName("li");
//视频
var v = document.getElementById("v");
//下标
//ms[0];
//ms[1];
//ms[2];
//ms[3];
//ms[4];
var menu0 = ms[0].children[0];
var menu1 = ms[1].children[0];
var menu2 = ms[2].children[0];
var menu3 = ms[3].children[0];
var menu4 = ms[4].children[0];
//v.children[0];
//v.children[1];
//v.children[2];
//v.children[3];
//v.children[4];
//var que = document.querySelectorAll("#v .v-video");
var que = document.getElementById("v").children;
var ql = que.length; //视频列表的长度
//绑定事件
//鼠标滑过,热门按钮
menu0.addEventListener("mousemove", changeTab);
menu0.addEventListener("mousemove", video0);
//鼠标滑过,栏目按钮
menu1.addEventListener("mousemove", changeTab);
menu1.addEventListener("mousemove", video1);
//鼠标滑过,攻略按钮
menu2.addEventListener("mousemove", changeTab);
menu2.addEventListener("mousemove", video2);
//鼠标滑过,赛事按钮
menu3.addEventListener("mousemove", changeTab);
menu3.addEventListener("mousemove", video3);
//鼠标滑过,官方按钮
menu4.addEventListener("mousemove", changeTab);
menu4.addEventListener("mousemove", video4);

function changeTab() {
    for (var i = 0; i < ql; i++) {
        //执行隐藏视频1,2,3,4,5
        v.children[i].style.display = "none";
        //执行清空css样式
        ms[i].children[0].className = "";
    }
    //执行显示当前触发按钮的css样式
    this.className = "active";
}

function video0() {
    v.children[0].style.display = "block";
}

function video1() {
    v.children[1].style.display = "block";
}

function video2() {
    v.children[2].style.display = "block";
}

function video3() {
    v.children[3].style.display = "block";
}

function video4() {
    v.children[4].style.display = "block";
}