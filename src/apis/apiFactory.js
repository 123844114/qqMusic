import Vue from 'vue'
import $axios from 'axios'
export default (url, data) => {
  const initData = {
    g_tk: '5381',
    uin: '0',
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: '0',
    platform: 'h5',
    needNewCode: '1'
  }
  let newData = Object.assign({}, initData, data)
  return $axios({
    method: 'get',
    url: url,
    params: newData
  })
}
