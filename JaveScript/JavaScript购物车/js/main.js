function iphone7() {
    var iphone7One = document.getElementById("iphone7One");
    var iphone7Add = document.getElementById("iphone7Add");
    var iphone7To = document.getElementById("iphone7To");
    var iphone7PlusOne = document.getElementById("iphone7PlusOne");
    var iphone7PlusAdd = document.getElementById("iphone7PlusAdd");
    var iphone7PlusTo = document.getElementById("iphone7PlusTo");
    var Add = document.getElementById("Add");
    var To = document.getElementById("To");

    var iphone7Number = iphone7To.innerText = iphone7One.innerText * iphone7Add.value

    var iphone7PlusNumber = iphone7PlusTo.innerText = iphone7PlusOne.innerText * iphone7PlusAdd.value

    //js提供了parseInt()和parseFloat()两个转换函数。前者把值转换成整数，后者把值转换成浮点数。
    To.innerText = parseFloat(iphone7Number) + parseFloat(iphone7PlusNumber);
}

iphone7();

// onchange 事件:	域的内容被改变。
document.getElementById("iphone7Add").addEventListener('change', iphone7);

document.getElementById("iphone7PlusAdd").addEventListener('change', iphone7);


var iphone7Jian = document.getElementById("iphone7Jian")
var iphone7Jia = document.getElementById("iphone7Jia")
var iphone7PlusJian = document.getElementById("iphone7PlusJian")
var iphone7PlusJia = document.getElementById("iphone7PlusJia")


// 7++ , 7--
function iphone7JiaJia() {
    document.getElementById("iphone7Add").value++;
}
iphone7Jia.addEventListener('click', iphone7JiaJia)
iphone7Jia.addEventListener('click', iphone7)
function iphone7JianJian() {
    if (document.getElementById("iphone7Add").value <= 1) {
        alert('数量是不可以小于1的')
    } else {
        document.getElementById("iphone7Add").value--;
    }
}
iphone7Jian.addEventListener('click', iphone7JianJian)
iphone7Jian.addEventListener('click', iphone7)

// 7P++ , 7P--
function iphone7PlusJiaJia() {
    document.getElementById("iphone7PlusAdd").value++;
}
iphone7PlusJia.addEventListener('click', iphone7PlusJiaJia)
iphone7PlusJia.addEventListener('click', iphone7)
function iphone7PlusJianJian() {
    if (document.getElementById("iphone7PlusAdd").value <= 1) {
        alert('数量是不可以小于1的')
    } else {
        document.getElementById("iphone7PlusAdd").value--;
    }
}
iphone7PlusJian.addEventListener('click', iphone7PlusJianJian)
iphone7PlusJian.addEventListener('click', iphone7)
