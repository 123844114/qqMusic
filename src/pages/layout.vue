<template>
  <div class="view-con">
    <logo-header></logo-header>
    <keep-alive>
    	<router-view class='content'></router-view>
    </keep-alive>
  </div>
</template>

<script>
import LogoHeader from '@/components/LogoHeader'
export default {
  name: 'layout',
  components: {
    LogoHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.view-con{
  width:100%
  position:relative
  .content{
    position:relative
    top: 90px;
  }
}
</style>
