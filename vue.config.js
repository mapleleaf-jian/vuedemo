const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 开启代理服务器
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      '/api1': { // 匹配所有以/api1开头的路径
        target: 'http://localhost:5000', // 代理目标的基础路径
        // 表示将 以api1 开头的请求中的api1替换成''，即在最终请求的时候去掉/api1
        pathRewrite: {'^/api1': ''},
        ws: true, // 表支持websocket,默认值为true
        changeOrigin: true // 默认值为true
      },
      '/api2': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/api2': ''},
        ws: true,
        changeOrigin: true
      }
    }
  }
})
