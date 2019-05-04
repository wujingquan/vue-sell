<template>
  <div class="tab">
    <cube-tab-bar
      class="border-bottom-1px"
      :data="tabs"
      v-model="selectedLabel"
      :showSlider=true
      :useTransition=false
      ref="tabBar"
    >
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
        :loop=false
        :auto-play=false
        :show-dots=false
        :initial-index="index"
        :options="slideOptions"
        ref="slide"
        @scroll="onScroll"
        @change="onChange"
      >
        <cube-slide-item v-for="(tab, index) in tabs" :key="index">
          <component :is="tab.component" :data="tab.data" ref="component"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Goods from 'components/goods/goods'

export default {
  props: {
    tabs: {
      type: Array,
      default () {
        return []
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      index: this.initialIndex,
      goods: Goods,
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get () {
        return this.tabs[this.index].label
      },
      set (newVal) {
        this.index = this.tabs.findIndex(value => {
          return value.label === newVal
        })
      }
    }
  },
  mounted () {
    this.onChange(this.index)
  },
  methods: {
    onScroll (pos) {
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const transform = -pos.x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    },
    onChange (current) {
      this.index = current
      const component = this.$refs.component[current]
      component.fetch && component.fetch()
    }
  },
  components: {
    Goods
  }
}
</script>

<style lang="stylus" scoped>
.tab
  display flex
  flex-direction column
  height 100%
  >>> .cube-tab
    padding 10px 0
  .slide-wrapper
    flex 1
    overflow hidden
</style>
