const px2rem = require('postcss-plugin-px2rem')
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
          path.resolve(__dirname, 'src/assets/common.scss')
      ]
    }
  },

  // 配置px2rem postcss-plugin-px2rem lib-flexible

  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            px2rem({
              rootValue: 37.5,
              exclude: '/node_modules/'
            })
          ]
        }
      }
    }
  }
})
