<template>
  <div class="view-con">
    <logo-header></logo-header>
    <tabs></tabs>
    <router-view class='content'></router-view>
  </div>
</template>

<script>
import tabs from '@/components/tabs'
import LogoHeader from '@/components/LogoHeader'
export default {
  name: 'layout',
  components: {
    tabs, LogoHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.view-con{
  width:100%
  position:relative
  .content{}
}
</style>
