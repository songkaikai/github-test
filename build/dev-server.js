// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var config = require('./webpack.dev.conf')

// 创建一个express实例
var app = express()

//接收模拟数据
var appData = require('../data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRouters = express.Router();
apiRouters.get('/seller',function(req,res){
    res.json({
        errno: 0,
        data: seller
    });
});

apiRouters.get('/goods',function(req,res){
    res.json({
        errno: 0,
        data: goods
    });
});

apiRouters.get('/ratings',function(req,res){
    res.json({
        errno: 0,
        data: ratings
    });
});

app.use('/api', apiRouters);

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 使用 webpack-hot-middleware 中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)


// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// 注册中间件
app.use(devMiddleware)
// 注册中间件
app.use(hotMiddleware)

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    opn('http://localhost:8888')
    console.log('Listening at http://localhost:8888')
})