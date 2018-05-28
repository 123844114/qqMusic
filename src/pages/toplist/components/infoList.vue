<template>
  <div class="listBox">
    <div class="title">排行榜 共{{total}}首</div>
    <ul class="listBox">
      <li class="item" v-for="(item,index) in options" :key="index">
        <div :class="{'tip':true,'isRed':index<3}">{{index}}</div>
        <div class="txt">
          <h3 class="txt-h">{{item.data.songname}}</h3>
          <P class="txt-p">{{item.data.singer[0].name}}</P>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'infoList',
  props: ['options', 'total']
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
   }
 }
}
</style>
