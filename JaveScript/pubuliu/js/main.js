window.onload = function () { //当页面完全加载完成后才执行js代码
        imgLocation();
        var boxData = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg","11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"];
        window.onscroll = function () {
            //    判断只有当前
            if (getScroll()) {
                for (var i = 0; i < boxData.length; i++) {
                    var createBox = document.createElement("div");
                    var container = document.querySelector(".container");
                    createBox.className = "box";
                    container.appendChild(createBox);
                    var createImg = document.createElement("img");
                    createImg.src = "img/" + boxData[i];
                    createBox.appendChild(createImg);
                }
                imgLocation();
            }
        }
    }
    //判断滚动条是否滚动到最后一张图片
function getScroll() {
    //    如果最后一张图片距离顶部的高度<浏览器的高度+滚动条距离顶部的高度,那么就返回true
    var box = document.querySelectorAll(".box");
    var lastBox = box.length - 1;
    var lastBoxTop = box[lastBox].offsetTop; //最后一张图片距离顶部的高度
    var ieHeight = document.documentElement.clientHeight || document.body.clientHeight; //获取浏览器的高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条滚动了的高度
    //    console.log(scrollTop);
    if (lastBoxTop < ieHeight + scrollTop) {
        return true;
    }
}
    
function imgLocation() {
    var container = document.querySelector(".container");
    var box = document.querySelectorAll(".box");
    var ieWidth = document.body.clientWidth; //获取浏览器的宽度
    var boxWidth = box[0].offsetWidth; //获取第一个box的宽度
    var num = Math.floor(ieWidth / boxWidth); //浏览器的宽度/box的宽度=一排图片的个数
    var containerWidth = num * boxWidth; //一排图片的个数*单个box盒子的个数=主体内容的宽度
    //    console.log(containerWidth);
    container.style.width = containerWidth + "px";
    var boxHeightArr = [];
    for (var i = 0; i < box.length; i++) {
        if (i < num) {
            boxHeightArr[i] = box[i].offsetHeight;
            //            console.log(boxHeightArr);
        }
        else {
            var minHeight = Math.min.apply(null, boxHeightArr); //获取到数组里面最小的值
            box[i].style.position = "absolute";
            box[i].style.top = minHeight + "px";
            var minIndex = getMinHeight(boxHeightArr, minHeight);
            box[i].style.left = box[minIndex].offsetLeft + "px";
            //重新赋值3个arr数组
            boxHeightArr[minIndex] = boxHeightArr[minIndex] + box[i].offsetHeight;
            //            console.log(box[3].offsetHeight);
            //            console.log(boxHeightArr);
        }
    }
    //    console.log("最矮图片的位置是"+minIndex);
}
//获取最矮图片的位置
function getMinHeight(boxHeightArr, minHeight) {
    for (var i in boxHeightArr) {
        if (boxHeightArr[i] === minHeight) {
            return i;
        }
    }
}