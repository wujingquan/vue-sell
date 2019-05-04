<template>
  <div class="goods">
    <div class="scroll-nav-wrapper">
      <cube-scroll-nav
        v-if="goods.length"
        :side=true
        :data="goods"
      >
        <cube-scroll-nav-panel
          v-for="good in goods"
          :key="good.name"
          :label="good.name"
          :title="good.name" 
        >
          <ul>
            <li
              class="food-item"
              v-for="food in good.foods"
              :key="food.name"
            >
              <div class="icon">
                <img width="57" height="57" :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{ food.name }}</h2>
                <p class="desc">{{ food.description }}</p>
              </div>
            </li>
          </ul>
        </cube-scroll-nav-panel>
      </cube-scroll-nav>
    </div>
  </div>
</template>

<script>
import { getGoods } from 'api'

export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      goods: []
    }
  },
  computed: {
    seller () {
      return this.data.seller
    }
  },
  methods: {
    fetch () {
      if (!this.fetched) {
        this.fetched = true
        getGoods({
          id: this.seller.id
        }).then(goods => {
          this.goods = goods
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.goods
  position relative
  text-align left 
  height 100%
  .scroll-nav-wrapper
    position absolute
    width 100%
    top 0
    left 0
    bottom 48px
    >>> .cube-scroll-nav-bar
      width 80px
      white-space normal
      overflow hidden
    >>> .cube-scroll-nav-bar-item
      padding 0 10px
      display flex
      align-items center
      height 56px
      line-height 14px
      font-size $fontsize-small
      background $color-background-ssss
      .text
        flex 1
</style>
