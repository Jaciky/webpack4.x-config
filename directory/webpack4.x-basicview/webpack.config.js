const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')


module.expots = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[{
      test: /\.jsx$/,
      exclude: /node_modules/,
      user: {
        loader: 'babel-loader'
      }
    },{
      test: /\.vue$/,
      exclude: /node_modules/,
      loader: 'vue-loader',
      options: {
        compilerOptions: {
         preserveWhitespace: false
        }
      }
    },{
      test: /\.css$/,
      exclude: /node_modules/,
      use: ['style-loader','css-loader']
    },{
      test: /\.less$/,
      exclude: /node_modules/,
      use: ['style-loader','css-loader','less-loader']
    },{
      test: /\.(png|jpg|jpeg|gif|svg)/,
      use: {
        loader: 'url-loader',
        options: {
          name: 'images/[name].[hash:7].[ext]', // 图片输出的路径
          limit: 1 * 1024
        }
      }
    }]
  },
  plugin: [
    new CleanWebpackPlugin(['dist']),
    new VueLoaderPlugin(), // 使用vue-loader 确保 请确保引入这个插件！
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'/','index.html'),
      title: 'webpack4.x-config',
      filename: 'index.html'
    })
  ],
  devServer: {
    hot:true,//热加载
    port: 3824, // 端口
    host: 'localhost'
  }
}