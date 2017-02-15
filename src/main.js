// 加载样式
require('./scss/reset.scss')

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

const Lists=resolve=>require(['./components/Lists'],resolve)
const Article=resolve=>require(['./components/Article'],resolve)

const routes=[
  {path:'/',redirect:'/list'},
  {path:'/list',component:Lists},
  {path:'/list/:id',component:Article}
]

let router=new VueRouter({routes})

new Vue({
  el:'#app',
  router,
  render(h){
    return h(App)
  }
})