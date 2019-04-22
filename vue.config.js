const CompressionPlugin = require("compression-webpack-plugin")
const productionGzipExtensions = ['js', 'css']



module.exports = {
  outputDir: undefined,
  publicPath: './',
  assetsDir: 'assets',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '4px',

        },
        javascriptEnabled: true
      }
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [

          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240,//对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      }
    }

  },

  pluginOptions: {
    i18n: {
      locale: 'zh-CN',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  lintOnSave: undefined,


}
