const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const cleanPlugin = require('clean-webpack-plugin')
const glob = require('glob')
const purifycss = require('purifycss-webpack')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var website ={
  publicPath:"http://localhost:9999/"
}
// if(process.env.type == 'dev'){
//   var website ={
//     publicPath:"http://localhost:9999/"
//   }
// }else{
//   var website ={
//     publicPath:"http://jd.com/"
//   }
// }

console.log( encodeURIComponent(process.env.type) );

module.exports = {
  entry:{
    entry:'./src/main.js',
    vue:'vue',
    jquery:'jquery'
  },
  // devtool:'inline-source-map',
  output:{
    path:path.resolve(__dirname, 'dist'),
    filename:'[name].js',
    // publicPath:website.publicPath
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader"
        ]
      },
      {
        test:/\.less$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "less-loader"
        ]
      },
      {
        test:/\.(png|jpg|git|svg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:7000,
              outputPath:'./images/'
            }
          }
        ]
      },
      {
        test:/\.(html|htm)$/i,
        use:[{
          loader:'html-withimg-loader'
        }]
      },
      {
        test:/\.js$/,
        use:{
          loader:'babel-loader',
        },
        exclude:/node_modules/,
        include: path.resolve('src')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  devServer:{
    contentBase: path.resolve(__dirname,'dist'),
    compress:true,
    port:9999
  },
  plugins: [
    new htmlWebpackPlugin({
      filename:'index.html',
      template:'./index.html',
      minify:{
        removeAttributeQuotes:true
     },
      hash:true
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new cleanPlugin(['dist']),
    new purifycss({
      paths:glob.sync(path.resolve(__dirname,'./*.html'))
    }),
    // new webpack.ProvidePlugin({
    //   Vue:"vue",
    //   $: "jquery"
    // })
  ],
  optimization: {
    splitChunks: {
        cacheGroups: {
            vue: {
                name: "vue",
                chunks: "initial",
                minChunks: 2
            },
            jquery: {
              name: "jquery",
              chunks: "initial",
              minChunks: 2
            }
        }
    }
  }
}