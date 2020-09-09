// 入口文件
console.log('OK')
import Vue from 'vue'

//导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: "#app",
    render: c => c(app)
})