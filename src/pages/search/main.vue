<template>
  <div class="main">
    <tabs :options='selected'></tabs>
    <div class="con">主体内容</div>
  </div>
</template>

<script>
import tabs from '@/components/Tabs'
export default {
  name: 'mainSearch',
  components: {tabs},
  data () {
    return {
      selected: 'item3'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

</style>
