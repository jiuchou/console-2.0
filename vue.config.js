const path = require('path')

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  // where to put static assets (js/css/img/font/...)
  outputDir: 'dist',
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  // 有效值: true | false | 'error'
  // 当设置为 'error' 时，检查出的错误会触发编译失败
  lintOnSave: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }

    Object.assign(config, {
      // 开发生产共同配置
      name: 'DevOpsClub',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        }
      }
    })
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: true,
  // css相关配置
  css: {
    // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
    // 也可以是传递给 extract-text-webpack-plugin 的选项对象
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 是否为 CSS 开启 source map
    sourceMap: false,
    // css预设器配置项
    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {},
    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    // 自动启动浏览器
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8888,
    https: false,
    hotOnly: false,
    /**
     * proxy: {
     *   // proxy all requests starting with /api to jsonplaceholder
     *   '/api': {
     *     // 代理路径（真实请求的目标地址） 例如 https://baidu.com
     *     target:  'https://baidu.com',
     *     // 将主机标头的原点更改为目标URL
     *     changeOrigin: true,
     *     ws: true,
     *     pathRewrite: {
     *       // '^http://localhost:8080/': ''
     *       '^/api': ''
     *     }
     *   }
     * }
     */
    // before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
