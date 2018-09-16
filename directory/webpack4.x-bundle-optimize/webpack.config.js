const path = require('path')
const webpack = require('webpack')
const htmlWebpack = require('html-webpack-plugin')
const cleanWebpack = require('clean-webpack-plugin')
const copyWebpack = require('copy-webpack-plugin')

module.exports = {
    entry:'./src/main.js',
    output:{
        publicPath: '/',  //这里要放的是静态资源CDN的地址
        filename:'[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve:{//配置别名可以加快webpack查找模块的速度
        extensions: [".js",".css",".json"],
        alias: {} 
    },
    plugins:[
        new htmlWebpack({
            template:path.resolve(__dirname,'public/index.html'),
            filename:'index.html'
        }),
        new copyWebpack([//复制项目下static文件
            {
                from: path.resolve(__dirname, 'static'),
                to: path.resolve(__dirname, 'dist/static'),
                ignore: ['.*']
            }
        ]),
        new cleanWebpack(['dist']),//删除dist文件
    ],
    devtool: 'eval-source-map', // 指定加source-map的方式
    devServer: {
        contentBase: path.join(__dirname, "./index.html"), //静态文件根目录
        port: 3824, // 端口
        host: 'localhost',
        overlay: true,
        compress: false // 服务器返回浏览器的时候是否启动gzip压缩
    }
}