// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {app:  path.resolve(__dirname, '../index/index.js')},
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[id].[chunkhash].js'
    },
    module: {
        
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            // 这里是说遇到了 .vue 扩展名的文件，需要先使用 vue-loader 处理之后再打包。
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            }
        ]
    }
}