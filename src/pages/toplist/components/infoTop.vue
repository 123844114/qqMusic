<template>
  <div class='info_box' style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);">
      <div class="info_box__bd">
        <div class="album">
          <div class="album__media js_open_music">
            <img class="album__cover" src="https://y.gtimg.cn/music/photo_new/T002R300x300M000001si6aD3SmQy5.jpg?max_age=2592000" alt="巅峰榜·流行指数">
          </div>
          <div class="album__bd">
	        	<h1 class="album__name js_info_show" data-singername="巅峰榜·流行指数">{{options.ListName}}</h1>
            <p class="album__desc">第{{options.day_of_year}}天</p>
            <p class="album__desc">{{options.date}} 更新</p>
	        </div>
        </div>
        <div class="opt_box">
            <div class="btn_play_all" v-if='isAll' @click="isAll=false">播放全部</div>
            <div class="play_bar" v-else>
              <div class="play_bar_aside">
                <svg class="play_bar__icon icon_svg" style="display:">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_pause_thin" id="js_icon_status">
                    <svg id="icon_pause_thin" viewBox="0 0 32 32" width="100%" height="100%">
                     <title>暂停</title>
                     <path d="M16 29c7.177 0 13-5.818 13-13s-5.823-13-13-13c-7.177 0-13 5.818-13 13s5.823 13 13 13zM16 30c-7.732 0-14-6.268-14-14s6.268-14 14-14c7.732 0 14 6.268 14 14s-6.268 14-14 14zM11 11.995v8.009c0 0.546 0.449 0.995 1.003 0.995h1.494c0.56 0 1.003-0.446 1.003-0.995v-8.009c0-0.546-0.449-0.995-1.003-0.995h-1.494c-0.56 0-1.003 0.446-1.003 0.995zM17.5 11.995v8.009c0 0.546 0.449 0.995 1.003 0.995h1.494c0.56 0 1.003-0.446 1.003-0.995v-8.009c0-0.546-0.449-0.995-1.003-0.995h-1.494c-0.56 0-1.003 0.446-1.003 0.995z"></path>
                    </svg>
                  </use>
                </svg>
                <svg class="progress">
                  <circle class="progress__circle" id="js_progress_circle" cx="23" cy="23" r="18" stroke-dasharray="28.60777322447847 113"></circle>
                </svg>
              </div>
              <div class="play_bar__bd">
                <h2 class="song_name">{{options.data.songname}}</h2>
                <div class="lyrics">
                  <div class="lyrics__bd" style="transition: -webkit-transform 0.3s ease-out; transform: translate3d(0px, 0px, 0px);">
                    <p id="line_0" class="lyrics__item">爱能有多好 - 庄心妍 (Ada Zhuang)</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000001si6aD3SmQy5.jpg?max_age=2592000" alt="" class="info_img">
    </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'infotop',
  props: ['options'],
  data () {
    return {
      isAll: true
    }
  },
  updated () {
    console.log($('#js_progress_circle').css('stroke-dasharray', '39 113'))
  }
}
</script>

<style lang="stylus" scoped>
.info_box {
  width: 100%;
  height: 245px;
  position: relative;
  color: #fff;
  overflow: hidden;

  .info_box__bd {
    width: 100%;
    height: 147px;
    position: absolute;
    z-index: 10;

    .album {
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      -webkit-box-sizing: border-box;
      width: 100%;
      margin-top: 17px;
      padding: 0 16px;
      overflow: hidden;

      .album__media {
        position: relative;
        width: 125px;
        margin-right: 10px;
        overflow: hidden;

        &:after {
          content: '';
          display: block;
          padding-top: 100%;
        }

        .album__cover {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .album__bd {
        position: relative;
        -webkit-box-flex: 1;

        .album__name {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          max-height: 47px;
          line-height: 1.3;
          overflow: hidden;
          font-size: 18px;
        }

        .album__desc {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          max-height: 36px;
          overflow: hidden;
          margin-top: 8px;
        }
      }
    }

    .opt_box {
      display: -webkit-box;
      -webkit-box-pack: center;
      -webkit-box-align: center;
      height: 84px;
      padding: 0 16px;
      -webkit-transition: 1s ease-in-out;

      .btn_play_all {
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        width: 170px;
        height: 40px;
        overflow: hidden;
        text-align: center;
        font-size: 16px;
        color: #fff;
        border-radius: 20px;
        background: #31c27c;

        &:before {
          content: '';
          display: block;
          height: 0;
          width: 0;
          margin-right: -3px;
          border-color: transparent transparent transparent #fff;
          border-width: 7px 11px;
          border-style: solid;
          border-radius: 2px;
        }
      }

      .play_bar {
        display: -webkit-box;
        -webkit-box-align: center;
        width: 100%;

        .play_bar_aside {
          position: relative;
          margin-right: 8px;
        }
      }

      .play_bar__icon {
        display: block;
        width: 46px !important;
        height: 46px !important;
        color: #31c27c;
      }

      .icon_svg {
        display: inline-block;
        width: 1em;
        height: 1em;
        stroke-width: 0;
        stroke: currentColor;
        fill: currentColor;
      }
    }

    .play_bar__bd {
      -webkit-box-flex: 1;
      height: 46px;
      overflow: hidden;

      .song_name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 14px;
        line-height: 24px;
        color: #fff;
        font-weight 300
      }

      .lyrics {
        height: 18px;
        overflow: hidden;
        .lyrics__item {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
  }

  .info_img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.9) translateZ(0);
    filter: blur(33px);
  }
  .progress{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 46px;
    height: 46px;
    transform: rotate(-90deg);
    .progress__circle{
      fill none
      stroke #31c27c
      stroke-width 2px
    }
  }
}
</style>
