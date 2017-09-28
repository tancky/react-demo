
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = require('../conf/rules');

console.log('webpack开始工作----');
module.exports = {

    entry: ['./src/app/app.js'], //入口文件

    output: {
        path: path.resolve(__dirname, 'dev'),  //node.js中__dirname变量获取当前模块文件所在目录的完整绝对路径
        filename: 'js/[name].js',
        chunkFilename: "js/[name].js",
        publicPath: "/"     //模板、样式、脚本、图片等资源对应的server上的路径
    },

    module: {
        rules: rules
    },
    watch: true,  //实时监听文件编译，刷新页面
    devtool: "source-map",
    plugins: [
        new ExtractTextPlugin({
            "filename": 'css/combine.css'
        }),   //抽离css样式,防止将样式打包在js中引起页面样式加载错乱的现象
        new HtmlWebpackPlugin({
            template: './src/static/index.html',
            filename: path.resolve(__dirname, './dev/index.html'),
            inject: 'body'   //引入模块的注入位置；取值有true/false/body/head
            //favicon: 指定页面图标
        })  //每次运行后指定目录生成对应html模版，同时自动引入所需的css,js文件，如果有hash值(避免缓存问题)存在，也会生成到对应的html模版内
    ]
}
