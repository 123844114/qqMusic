<template>
  <div class="logo">
    <h1>QQ音乐</h1>
    <span>下载APP</span>
  </div>
</template>

<script>
export default {
  name: 'LogoHeader',
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.logo{
  width 100%
  padding 0 10px
  overflow hidden
  background #31C27C
  position fixed
  top 0
  z-index 999
  h1{
    display inline-block
    font-size 0
    background-image url('../../static/image/logo.png')
    width 110px
    height 30px
    background-size cover
    background-repeat no-repeat
    float left
    margin 10px 0
  }
  span{
    float right
    width 80px
    height 30px
    border-radius 30px
    background #149C5A
    color #fff
    line-height 30px
    text-align center
    margin 10px 0
    font-size 0.8rem

  }
}
</style>
