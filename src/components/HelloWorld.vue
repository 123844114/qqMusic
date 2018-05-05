<template>
  <div class="hello">
    <router-link to="/home">首页</router-link>
    <router-link to="/top10">top10</router-link>
    <router-link to="/loading">loading</router-link>
    <router-link to="/form">form</router-link>
    <router-link to="/chat/2">chat</router-link>
  </div>
</template>

<script>
import $axios from 'axios'
export default {
  name: 'HelloWorld111',
  data () {
    return {
      data: {
        ruleForm: {
          name: '12',
          delivery: '132',
          desc: '312'
        }
      }
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
