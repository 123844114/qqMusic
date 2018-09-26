<template>
  <div class="listBox">
    <div class="title">排行榜 共{{total}}首</div>
    <ul class="listBox">
      <li class="item" v-for="(item,index) in options" :key="index" @click="playSong(item)">
        <div :class="{'tip':true,'isRed':index<3}">{{index}}</div>
        <div class="txt">
          <h3 class="txt-h">{{item.data.songname}}</h3>
          <!-- <P class="txt-p">{{item.data.singer[0].name}}</P> -->
          <p class="txt-p">
            <span v-for="(songer,index) in item.data.singer" :key="index">{{songer.name}}<i v-if="index!==item.data.singer.length-1" >/</i></span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import apiFactory from '@/apis/apiFactory'
import originJSONP from 'jsonp'
export default {
  name: 'infoList',
  props: ['options', 'total'],
  data () {
    return {
    }
  },
  mounted () {
    this.getdata()
  },
  methods: {
    playSong (item) {
      // 播放被点击的歌曲-找歌词-歌名
      console.log(item)
      let url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&nobase64=1&musicid=214046115&songtype=0&_=1528097715374'
      /*  let param = {
        g_tk: '5381',
        uin: '0',
        inCharset: 'utf-8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'h5',
        needNewCode: '1',
        format: 'jsonp',
        nobase64: 1,
        musicid: item.data.songid,
        songtype: 0,
        _: '1527933679386',
        jsonpCallback: 'jsonp1'
      } */
      // let result = await apiFactory(url, param)
      // console.log(result)
      /* this.$jsonp(url, param).then((data) => {
        console.log(data)
      }) */
      var param = {
        param: 'jsonpCallback '// 此处的jsonpCallback是对应的回调函数名称
      }
      originJSONP(url, param, (data) => {
        console.log(data)
      })
    },
    getdata () {
      // 此处的url是完整的地址，可以改进下重新封装此url
      var url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg?g_tk=223259203&jsonpCallback=hotSearchKeysmod_top_search&loginUin=1234567&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0'
      var param = {
        param: 'jsonpCallback'// 此处的jsonpCallback是对应的回调函数名称
      }
      originJSONP(url, param, (err, data) => {
        if (!err) {
          console.log(data)
        } else {
          console.log(err)
        }
      })
    }
  }
}
</script>
<style lang="stylus" scope>
.listBox{
 padding:0 10px
 overflow hidden
 .title{
   font-size 16px
   color #777
 }
 .item{
   float left
   padding 5px 0
   position relative
   width 100%
 }
 .tip{
   width 45px
   min-height 40px
   position absolute
   line-height: 40px;
   text-align: center;
     &.isRed{
     color red !important
   }
 }
 .txt{
   padding-left 45px;
   min-height 40px
   line-height 20px
   .txt-h{
     display: block;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    color: #000;
    font-weight normal

   }
   .txt-p{
    display: -webkit-box;
    -webkit-box-align: center;
    overflow: hidden;
    display: block;
    max-width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #777;
    font-size 12px
    i{
      padding:0 5px
    }
   }
 }
}
</style>
