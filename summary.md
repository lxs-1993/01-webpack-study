### css
```javascript
 webpack默认只加载js,不支持加载css
 需要css装载器， 
 css-loader,
 style-loader(把css直接添加到html中的style标签里边)
 是从右到左，先加载后整合
```
## css构建工具
```javascript
 less less-loader
 sass-loader loader-sass
```
## css抽取(extract) yarn add mini-css-extract-plugin

### exports.a = [] // 导出的是一个对象
### module.exports // 默认导出的

## css压缩有两种
```javascript
  1: optimizer-css-assets-webpack-plugin(使用这种,默认的js压缩会无效的)
  const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
    optimization: {
    minimizer: [new OptimizeCssAssetsWebpackPlugin]
  },
  2：css-minimizer-webpack-plugin(使用这种，默认的js压缩还是有效的)

```
## js压缩 
```javascript
  1: terser-webpack-plugin
  yarn add terser-webpack-plugin
  2: uglifyjs也是可以压缩js的，但是对es6压缩的不彻底
```
## babel转码器(支持es7以上的语法)
```javascript
 yarn add -D babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-decorators
```
## css添加前缀，兼容浏览器
```javascript
 yarn add postcss postcss-loader postcss-preset-env -D
 yarn add -D autoprefixer
```
## 消除未使用的css PurifyCss可以减少css冗余

```javascript
 1：PurifyCss
 yarn add -D  purifycss-webpack purify-css (这种已经不兼容webpack5了)
 2：purgecss-webpack-plugin
  // 纯净的css文件
  const glob = require('glob');
  const path = require("path")
  const PurgeCSSPlugin = require('purgecss-webpack-plugin')
  plugins: [
    new PurgeCSSPlugin({
      // paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
      // 可以换成熟悉的用法
      paths: glob.sync(path.join(__dirname, 'index.html')),
    })
  ]
```