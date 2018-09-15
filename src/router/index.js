import Vue from 'vue'
import Router from 'vue-router'

import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import NotFound from 'components/notfound/notfound'

// 路由懒加载
// const Goods = () => import('components/goods/goods')
// const Ratings = () => import('components/ratings/ratings')
// const Seller = () => import('components/seller/seller')


Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    { path: '/', redirect: '/goods' },
    { path: '*', component: NotFound },
    { path: '/goods', component: Goods },
    { path: '/ratings', component: Ratings },
    { path: '/seller', component: Seller }
  ]
})