var webpack = require('webpack');
var ora = require('ora');
var webpackConfig = require('./webpack.config.js');

var spinner = ora('building for production...');
spinner.start();

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
});