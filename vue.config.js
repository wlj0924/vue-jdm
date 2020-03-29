module.exports = {
  devServer: {
    port:9000,
    proxy: {
      '/db': {
        target: 'http://localhost:8080',  // 代理
        changeOrigin: true
      }
    }
  }
}
