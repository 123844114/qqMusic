<template>
    <div class="tabMain">
      <router-link
      v-for="(item,index) in tabList"
      :key="index"
      :to="item.url"
      tag="div"
      >{{item.name}}</router-link>
    </div>
</template>
<script>
export default{
  name: 'Tabs',
  props: ['options'],
  components: {
  },
  data () {
    return {
      tabList: [
        {selected: 'item1', name: '推荐', url: '/recom'},
        {selected: 'item2', name: '排行榜', url: '/toplist'},
        {selected: 'item3', name: '搜索', url: '/search'}
      ]
    }
  },
  methods: {
  }
}
</script>
<style lang='stylus' scoped="">
.tabMain{
    position absolute
    width 100%
    position fixed
    top 50px
    z-index 999
    height 40px
    line-height 40px
    font-size 1rem
    div{
      float left
      width 33.3%
      text-align center
      position relative
      background #fff
      font-weight normal
      color rgba(0,0,0,.6)
    }
    .router-link-exact-active{
      color #31C27C
    }
    .router-link-exact-active:before{
      content:''
      position:absolute
      bottom 0px
      left 0
      width 100%
      height 3px
      background #31C27C
    }
}
</style>
