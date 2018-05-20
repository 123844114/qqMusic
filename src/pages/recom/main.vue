<template>
	<div class="hello">
    <tabs :options='selected'></tabs>
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
			<h2>电台</h2>
			<grid-item v-for="(item) in radioList" :key="item.radioid">
				<img :src="item.picUrl" icon='img' @click='goDetail(item.radioid)'>
				<p>{{item.Ftitle}}</p>
			</grid-item>
		</grid>
	</div>
</template>

<script>
import tabs from '@/components/Tabs'
import { Grid, GridItem } from 'vux'
export default {
  name: 'mainVue',
  data () {
    return {
      selected: 'item1',
      slides: [],
      radioList: []
    }
  },
  components: {
    tabs,
    Grid,
    GridItem
  },
  created () {
    let vm = this
    vm.$axios.get('/api').then(({
      data
    }) => {
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
	.dian {
		img {
			width 100%
		}
		h2{
			font-size 1.0rem
			padding 10px 0 0 10px
		}
  }
  .weui-grid{
  	padding 10px
  }
</style>
