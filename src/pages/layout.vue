<template>
  <div class="main">
    <tabs></tabs>
    <router-view class='content'></router-view>
  </div>
</template>

<script>
import tabs from '@/components/tabs'
export default {
  name: 'layout',
  components: {
    tabs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.main{
  width:100%
  position:relative
  .content{}
}
</style>
