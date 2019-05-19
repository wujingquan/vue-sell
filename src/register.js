import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeadDetail from 'components/header-detail/header-detail'
import ShopCartList from 'components/shop-cart-list/shop-cart-list'
import ShopCartStikcy from 'components/shop-cart-sticky/shop-cart-sticky'
import Food from 'components/food/food'

createAPI(Vue, HeadDetail)
createAPI(Vue, ShopCartList)
createAPI(Vue, ShopCartStikcy)
createAPI(Vue, Food)