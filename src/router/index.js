import Vue from 'vue'
import Router from 'vue-router'
// 直出页面,js在主包中
import Home from '@/page/Home'
// 按需加载页面，页面js独自打包
const Detail = r => require.ensure([], () => r(require('@/page/detail')), 'Detail')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
  ]
})
