<template>
  <transition name="fade">
    <!-- <div class="header-detail" v-show="visible" @click="hide" @touchmove.stop.prevent> -->
      <div class="header-detail" v-show="visible" @click="hide">
      <div class="detail-wrapper clear-fix">
        <div class="detail-main">
          <h1 class="name">{{ seller.name }}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <v-title title="优惠信息"></v-title>
          <ul class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports" :key="item.id">
              <support-ico :size=2 :type="seller.supports[index].type"></support-ico>
              <span class="text">{{ seller.supports[index].description }}</span>
            </li>
          </ul>
          <v-title title="商家公告"></v-title>
          <div class="bulletin">
            <p class="content">{{ seller.bulletin }}</p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i class="icon-close"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import popupMixin from 'common/mixins/popup'
import SupportIco from 'components/support-ico/support-ico'
import Star from 'components/star/star'
import VTitle from 'components/v-title/v-title'

export default {
  name: 'header-detail',
  mixins: [popupMixin],
  props: {
    seller: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {
    SupportIco,
    Star,
    VTitle
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/mixin'
@import '~common/stylus/variable'

.header-detail
  position fixed
  z-index 100
  top 0
  left 0
  right 0
  bottom 0
  overflow auto
  backdrop-filter blur(10px)
  opacity 1
  color $color-white
  background $color-background-s
  &.fade-enter-active, &fade-leave-active
    transition all 0.5s
  &.fade-enter, &.fade-leave-to
    opacity 0
    background $color-backgroud
  .detail-wrapper
    display inline-block
    width 100%
    min-height 100%
    .detail-main
      margin-top 64px
      padding-bottom 64px
      .name
        line-height 16px
        text-align center
        font-size $fontsize-large
        font-weight 700
      .star-wrapper
        margin-top 18px
        padding 2px 0
        text-align center

      .supports
        width 80%
        margin 0 auto
        .support-item
          display flex
          align-items center
          padding 0 12px
          margin-bottom 12px
          &:last-child
            margin-bottom 0
          .support-ico
            margin-right 6px
          .text
            line-height 16px
            font-size $fontsize-small
      .bulletin
        width 80%
        margin 0 auto
      .content
        padding 0 12px
        line-height 24px
        font-size $fontsize-small
  .detail-close
    position relative
    width 30px
    height 30px
    margin -64px auto 0 auto
    clear both
    font-size $fontsize-large-xxxx
</style>
