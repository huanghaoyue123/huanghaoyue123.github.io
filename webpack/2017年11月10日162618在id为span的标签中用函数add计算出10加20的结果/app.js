    // 引入 bar.js文件
    import bar from './bar';

    //在id为span的标签中显示，add函数计算的10+20的结果
    var span = document.querySelector("#span");
    span.innerHTML = bar.add(10, 20);
