//全局组件
Vue.component('lists', {
    template: `<transition name="bounce"><li><slot></slot></li></transition>`
})

var app = new Vue({
    el: "#app",
    data: {
        //input里面的内容
        newFruit: '',
        placeholder: '接下来要做什么 ...',
        autofocus: 'autofocus',
        //默认待办事项
        fruits: ['学习 JavaScript','学习 Vue.js','整个牛项目']
    },
    // vue实例被生成后调用这个函数
    created: function () {
        this.liji
    },
    //计算属性
    computed: {
        liji: function () {
            //当前的水果列表 = 获取到的本地缓存的列表，并以逗号分隔转成数组
            if (localStorage.getItem(1) !== null) {
                this.fruits = localStorage.getItem(1).split(",")
            }
        }
    },
    //函数
    methods: {
        addFruit: function () {
            if (this.newFruit !== "") {
                // 当前的水果列表，追加进新的内容
                this.fruits.unshift(this.newFruit)
                //让input为空
                this.newFruit = ""
                //设置缓存的属性值1为当前的水果列表
                localStorage.setItem(1, this.fruits)
            } else {
                alert("请填点内容再添加")
            }
        },
        delFruit: function (index) {
            // 当前的水果列表，从数组中删除当前的
            this.fruits.splice(index, 1)
            //设置缓存的属性值1为当前的水果列表
            localStorage.setItem(1, this.fruits)
            //如果为空则清空
            if (localStorage.getItem(1) === "") {
                localStorage.clear()
            }
        }
    }
})
