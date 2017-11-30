import Vue from '../node_modules/vue/dist/vue'

Vue.component('my-cos',{
    template:"<button @click='e'>{{text}}</button>",
    data:function(){
        return {
            text:"按钮"
        }
    },
    methods:{
        e:function(){
            console.log(this.text)
        }
    }
})

new Vue({
    el:"#cos"
})