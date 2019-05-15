import { createAPI } from 'cube-ui'
import Vue from 'vue'
import HeadDetail from 'components/header-detail/header-detail'
import Food from 'components/food/food'

createAPI(Vue, HeadDetail)
createAPI(Vue, Food)