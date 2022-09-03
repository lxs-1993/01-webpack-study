// webpack是基于node的
const path = require("path")
// 引入插件
const plugins = require("./utils/plugins")
module.exports = {
  // 入口(entry)
  entry:'./src/index.js', // 默认入口就是src/index.js
  // 出口(output)
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  // 模式(生产模式还有开发模式)
  mode: 'production',
  // 装载器(loader)
  // 插件(plugins)
  plugins,
  // 配置端口
  devServer: {
    port: 9527,
    open: true, // 自动打开浏览器
    progress: true, // 进度
    contentBase: './dist' // 指定web服务的根目录
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader',]
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader','less-loader']
      },
    ]
  }
}