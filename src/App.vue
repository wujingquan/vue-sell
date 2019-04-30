<template>
  <div id="app" @touchmove.prevent>
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from 'components/header/header'
import { getSeller } from 'api'

export default {
  name: 'app',
  data () {
    return {
      seller: {
        id: 0
      }
    }
  },
  created () {
    this._getSeller()
  },
  methods: {
    _getSeller () {
      getSeller({
        id: this.seller.id
      }).then(seller => {
        this.seller = Object.assign({}, this.seller, seller)
      })
    }
  },
  components: {
    VHeader
  }
}
</script>

<style lang="stylus" scoped>

</style>