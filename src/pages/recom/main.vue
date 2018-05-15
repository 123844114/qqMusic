<template>
  <div class="hello">
    <!-- 轮播图 -->
    <wc-swiper v-if='slides.length'>
      <wc-slide v-for="(slide, key) in slides" :key="key">
        <router-link :to={path:slide.linkUrl}>
          <img :src="slide.picUrl">
        </router-link>
      </wc-slide>
    </wc-swiper>
    <!-- 电台 -->
    <grid class="dian">
     <grid-item v-for="(item) in radioList" :key="item.radioid" >
      <img :src="item.picUrl" icon='img' @click='goDetail(item.radioid)'>
      <p>{{item.Ftitle}}</p>
     </grid-item>
   </grid>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vux'
export default {
  name: 'mainVue',
  data () {
    return {
      slides: [],
      radioList: []
    }
  },
  components: {
    Grid,
    GridItem
  },
  created () {
    let vm = this
    vm.$axios.get('/api').then(({data}) => {
      vm.slides = data.data.slider
      vm.radioList = data.data.radioList
      console.log(data)
    })
  },
  methods: {
    goDetail (id) {
      // 跳转到热歌详情
      alert(id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.dian{
  img{
    width 100%
  }
}
</style>
