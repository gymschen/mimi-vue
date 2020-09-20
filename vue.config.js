module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        // 開啟代理
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
