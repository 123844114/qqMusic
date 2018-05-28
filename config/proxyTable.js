const proxyTable = {
    '/api': {
        target: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
            '^/api': ''
        }
    },
    '/toplist': { //toplist接口
        target: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
            '^/toplist': ''
        }
    },
    '/info': { //info接口
        target: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', // 接口的域名
        secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
            '^/info': ''
        }
    }
}
module.exports = proxyTable