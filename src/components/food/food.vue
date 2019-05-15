<template>
  <transition>
    <div class="food">
      <cube-scroll>
        <div class="food-content">
          <div class="image-header">
            <img :src="food.image" />
            <div class="back">
              <i class="icon-arrow_lift"></i>
            </div>
          </div>
          <div class="content">
            <h1 class="title">{{ food.name }}</h1>
            <div class="detail">
              <span class="sell-count">月售{{ food.sellCount }}</span>
              <span class="rating">好评率{{ food.rating }}%</span>
            </div>
            <div class="price">
              <span class="now">&yen;{{ food.price }}</span><span class="old">&yen;{{ food.oldPrice }}</span>
            </div>
            <div class="cart-controll-wrapper">
              <cart-control @add="addFood" :food="food"></cart-control>
            </div>
            <transition>
              <div class="buy">
                加入购物车
              </div>
            </transition>
          </div>
          <split></split>
          <div class="info">
            <h1 class="title">商品信息</h1>
            <p class="text">{{ food.info }}</p>
          </div>
          <split></split>
          <div class="rating">
            <h1 class="title">商品评价</h1>
          </div>
        </div>
      </cube-scroll>
    </div>
  </transition>
</template>

<script>
import CartControl from 'components/cart-control/cart-control'

export default {
  name: 'food',
  props: {
    food: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    show () {

    }
  },
  components: {
    CartControl
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.food
  position fixed
  left 0
  top 0
  bottom 48px
  z-index 30
  width 100%
  background $color-white
  .image-header
    position relative
    width 100%
    height 0
    padding-top 100%
    img
      position absolute
      top 0
      left 0
      width 100%
      height 100%
    .back
      position absolute
      top 10px
      left 0
      .icon-arrow_lift
        display block
        padding 10px
        font-size $fontsize-large-xx
        color $color-white
</style>
