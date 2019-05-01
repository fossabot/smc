const CompressionPlugin = require("compression-webpack-plugin")
const productionGzipExtensions = ['js', 'html', 'css']
var path = require('path');


module.exports = {
  publicPath: './',
  assetsDir: 'assets',

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '6px',

        },
        javascriptEnabled: true
      }
    }
  },

  /*   devServer: {
      contentBase: path.join(__dirname, 'devDist'),
      compress: true,
      port: 9000
    }, */


  /*   configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        return {
          plugins: [
            new CompressionPlugin({
              test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
              threshold: 10240,//对超过10k的数据压缩
              deleteOriginalAssets: false //不删除源文件
            })
          ]
        }
      }

    }, */

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  lintOnSave: undefined
}
