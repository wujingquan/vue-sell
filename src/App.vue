<template>
  <div id="app">
    <v-header :seller="seller"></v-header>

    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import VHeader from './components/header/header'
import axios from 'axios'
import { urlParse } from 'common/js/util'

const ERR_OK = 0
const DEBUG = process.env.NODE_ENV !== 'production'

export default {
  name: 'app',
  data () {
    return {
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  created () {
    axios.get(DEBUG ? '/api/seller' : `${process.env.BASE_URL}api/seller`)
      .then(res => {
        if (res.data.errno === ERR_OK) {
          this.seller = res.data.data
        }
      })
  },
  components: {
    VHeader
  }
}
</script>

<style lang="stylus">
@import "./common/stylus/mixin"

#app
  .tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color rgb(77, 85, 93)
        &.active
          color rgb(240, 20, 20)
</style>