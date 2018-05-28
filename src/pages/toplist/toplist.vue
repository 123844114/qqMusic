<template>
	<div class="main">
  <info-top :options='topinfo'></info-top>
	<div class="wrap">
    <info-list :options='songlist' :total = 'totalSongNum'></info-list>
  </div>
	</div>
</template>
<script>
import apiFactory from '@/apis/apiFactory.js'
import infoTop from './components/infoTop'
import infoList from './components/infoList'
export default {
  name: 'toplist',
  components: {infoTop, infoList},
  data () {
    return {
      topinfo: {
        ListName: '',
        day_of_year: '',
        date: ''
      },
      songlist: [],
      totalSongNum: 0
    }
  },
  mounted: async function () {
    let vm = this
    let param = {
      tpl: 3,
      page: 'detail',
      type: 'top',
      topid: 4,
      _: '1527406435525'
    }
    let url = '/info'
    let {data} = await apiFactory(url, param)
    if (data.code === 0) {
      vm.topinfo.ListName = data.topinfo.ListName
      vm.topinfo.day_of_year = data.day_of_year
      vm.topinfo.date = data.date
      vm.songlist = data.songlist
      vm.totalSongNum = data.total_song_num
    }
  }
}
</script>
<style lang="stylus" scoped>
.main {
  top: 50px !important;
}
</style>
