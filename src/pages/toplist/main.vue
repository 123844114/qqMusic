<template>
  <div class="main">
		<ul class="toplist">
			<li class='item' v-for="item in topList" :key="item.id">
				<img :src="item.picUrl" alt="" />
				<div class="txt">
					<h2>{{item.topTitle}}</h2>
					<a href="" v-for="(song,i) in item.songList" :key="i"> 
						<span>{{i+1}}</span>
						<span>{{song.songname}}</span>
						<span>{{song.singername}}</span>
					</a>
				</div>
			</li>
		</ul>
  </div>
</template>

<script>
export default {
  name: 'layout',
  components: {
  },
  data () {
    return {
      type: '1',
      topList: [{
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        }
      }],
      footer: {
        title: '查看更多',
        url: 'http://vux.li'
      }
    }
  },
  mounted(){
  	let vm =this
  	let data={
  		g_tk:'5381',
  		uin:'0',
  		format:'json',
  		outCharset:'utf-8',
  		notice:'0',
  		platform:'h5',
  		needNewCode:'1',
  		_:'1526479161465'
  	}
  	vm.$axios.get('/toplist',{params:data}).then(({data})=>{
  		console.log(data)
  		if(data.code===0){
  			vm.topList = data.data.topList
  		}
  	})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.main{
  width:100%
  position:relative;
  background: #eee;
  .toplist{
  	padding:0 10px;
  	overflow:hidden;
  	.item{
  		float: left;
  	}
  }
}
</style>
