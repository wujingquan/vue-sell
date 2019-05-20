<template>
  <transition
    name="move"
  >
    <div class="test1">
      test1
    </div>
  </transition>
</template>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.test1
  position fixed
  left 0
  top 0
  bottom 48px
  z-index 30
  width 100%
  background $color-white
</style>
