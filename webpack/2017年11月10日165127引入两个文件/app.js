    // 引入 add.js文件
    import addFun from './addFun';
    // 引入 sub.js文件
    import subFun from './subFun';

    //在id为add的标签中显示，add函数计算的10+20的结果
    var add = document.querySelector("#add");
    add.innerHTML = addFun.add(10, 20);
    //在id为sub的标签中显示，sub函数计算的10-20的结果
    var sub = document.querySelector("#sub");
    sub.innerHTML = subFun.sub(10, 20);
