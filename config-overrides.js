const path = require('path')
const { override, addWebpackAlias, addLessLoader, addWebpackPlugin } = require('customize-cra');
// const Webpack4QCDNPlugin = require('@q/webpack4-qcdn-plugin')

module.exports = {
  webpack: override(
    addWebpackAlias({ //路径别名
      '@': path.resolve(__dirname, 'src'),
    }),
    // 增加 less 支持
    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: {
      //   '@primary-color': '#1DA57A'
      // }
    }),
    // addWebpackPlugin(new Webpack4QCDNPlugin({
    //   qcdnOption: {
    //     https: true
    //   },
  
    //   // 文件上传并发数量
    //   concurrency: 5,
  
    //   // 上传出错后允许重试的次数
    //   maxRetryCount: 5,
  
    //   // 缓存文件地址，默认为  `${process.cwd()}/node_modules/.cache/qcdn_cache.json`
    //   // 如果传 `false` 则不使用缓存
    //   cachePath: 'node_modules/.cache/qcdn_cache.json',

    //   async preUpload ({ file, content, extname }) {
    //     // A. 不上传
    //     if (process.env.NODE_ENV !== 'production') {
    //       return false
    //     } 
    //     return true
    //   },
    // }))
  )
}