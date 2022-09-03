// webpack是基于node的
const path = require("path")
// 引入插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const plugins = require("./utils/plugins")
// 压缩Js文件
// const TerserWebpackPlugin = require("terser-webpack-plugin")
// // 压缩css文件 这种已经是要过时的了，最好不要使用
// const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const commonCssConfig = [ // 公共的css配置
  MiniCssExtractPlugin.loader,
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      //css兼容性配置
      postcssOptions: {
        plugins: [[require("postcss-preset-env")()]],
      },
    },
  },
];
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
  // optimization: {
  //   minimizer: [new TerserWebpackPlugin(),new OptimizeCssAssetsWebpackPlugin()]
  // },
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
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options:{
            // es6 7...转换为es5
            presets:[
              "@babel/preset-env"
            ],
            "plugins": [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: [...commonCssConfig], // css顺序是从右到左，从下到上
      },
      {
        test: /\.less$/,
        use: [...commonCssConfig,'less-loader'], // less顺序是从右到左，从下到上
      },
    ]
  }
}