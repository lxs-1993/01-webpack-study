

// html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 每次打包前，清除dist文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 合并css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// 压缩css文件
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
// 压缩Js文件
const TerserWebpackPlugin = require("terser-webpack-plugin")
// 纯净的css文件
const glob = require('glob');
const path = require("path")
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
module.exports = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html', // 指定输出的文件模板名
    minify: {  // 压缩html
      collapseWhitespace: true, // 折叠空白区域
      keepClosingSlash: true,  // 保持闭合间隙
      removeComments: true,   // 移除注释
      removeRedundantAttributes: true, // 删除冗余属性
      removeScriptTypeAttributes: true,  // 删除Script脚本类型属性
      removeStyleLinkTypeAttributes: true, // 删除样式链接类型属性
      useShortDoctype: true, // 使用短文档类型
      preserveLineBreaks: false, // 保留换行符
      minifyCSS: true, // 压缩文内css
      minifyJS: true, // 压缩文内js
    }
  }),
  new CleanWebpackPlugin(), // 使用这个插件在每次生成dist目录前，先删除dist目录
  // 抽离css文件
  new MiniCssExtractPlugin({
    filename: 'index.css'
  }),
  // 压缩css文件
  new CssMinimizerWebpackPlugin(),
  // 压缩js文件
  new TerserWebpackPlugin({
    // 压缩js
    test: /\.js(\?.*)?$/i, //匹配参与压缩的文件
    parallel: true, //使用多进程并发运行
    terserOptions: {
      //Terser 压缩配置
      output: { comments: false },
      compress: {
        // pure_funcs: ["console.log"], // 去除console.log
      },
    },
    extractComments: true, //将注释剥离到单独的文件中
  }),
  new PurgeCSSPlugin({
    // paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    // 可以换成熟悉的用法
    paths: glob.sync(path.join(__dirname, 'index.html')),
  })
]

