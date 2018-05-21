<template>
  <div class="main">
    <tabs :options='selected'></tabs>
    <div class="con">
      <div class="searchBar">
        <input type="text" placeholder="搜索歌曲、歌单、专辑">
        <span>搜索</span>
      </div>
      <div class="hotSearch">
        <h2>热门搜索</h2>
        <div class="hotWord">
          <span>我是歌手第四季</span>
          <span>我是歌手第四季</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabs from '@/components/Tabs'
export default {
  name: 'mainSearch',
  components: { tabs },
  data () {
    return {
      selected: 'item3'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hotWord{
  span{
    padding 5px
    border-radius 15px
    color red
    border 1px solid red
  }
}
</style>
