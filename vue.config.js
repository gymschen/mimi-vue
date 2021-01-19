module.exports = {
  // Vue開發代理方式
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        // 開啟代理
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
