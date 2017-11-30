module.exports = {
    //入口
    entry: './main.js',
    //出口
    output: {
        filename: 'build.js'
    },
    //添加默认搜索路径
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};