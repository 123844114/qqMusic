<template>
  <div class="main">
    <tabs :options='selected'></tabs>
		<ul class="toplist">
			<li class="item" v-for="item in topList" :key="item.id">
       <router-link class="item" tag="div" :to="{path:'/toplistinfo',query:{id:item.id}}">
        <img :src="item.picUrl" alt="" />
        <div class='txt'>
          <h2>{{item.topTitle}}</h2>
          <p v-for="(song,i) in item.songList" :key="i">
            <span>{{i+1}}</span>
            {{song.songname}}
            <span>-{{song.singername}}</span>
          </p>
        </div>
      </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import tabs from '@/components/Tabs'
export default {
  name: 'layout',
  components: {tabs},
  data () {
    return {
      selected: 'item2',
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
  mounted () {
    let vm = this
    let data = {
      g_tk: '5381',
      uin: '0',
  		format: 'json',
  		outCharset: 'utf-8',
  		notice: '0',
  		platform: 'h5',
  		needNewCode: '1',
  		_: '1526479161465'
  	}
  	vm.$axios.get('/toplist', {params: data}).then(({data}) => {
  		console.log(data)
  		if (data.code === 0) {
  			vm.topList = data.data.topList
  		}
  	})
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.main{
  width 100%
  position relative
  background #eee
  .toplist{
  	padding 0 10px
  	overflow hidden
  	.item{
  		float left;
      margin-top 10px
      position relative
      background #ffffff
      width 100%
      img{
        widht 100px
        height 100px
        position absolute
        left 0
        top 0
      }
      .txt{
        padding 0.2rem 0
        margin-left 105px
        height 100px
        h2{
          font-size 1.0rem
          font-weight normal
        }
        p{
          display block
          color #000
          text-decoration none
          font-size 0.8rem
          margin-top 7px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        }
        span{
          color #a5a3a3
        }
      }
  	}
  }
}
</style>
