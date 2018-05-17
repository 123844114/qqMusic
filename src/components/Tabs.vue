<template>
    <tab class='tabMain'>
        <tab-item @on-item-click="handler" selected>推荐</tab-item>
        <tab-item @on-item-click="handler">排行榜</tab-item>
        <tab-item @on-item-click="handler">搜索</tab-item>
    </tab>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default{
  name: 'Tabs',
  components: {
    Tab,
    TabItem
  },
  methods: {
    handler (index) {
      switch (index) {
        case 0:
          this.$router.push('/recom')
          break
        case 1:
          this.$router.push('/toplist')
      }
    }
  }
}
</script>
<style lang='stylus' scoped="">
.tabMain{
    // position:absolute
    width 100%
    position fixed
    top 50px
    z-index 999
}
</style>
