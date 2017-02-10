require('shelljs/global')
var path = require('path');
var webpack = require('webpack');
var ora = require('ora');
var webpackConfig = require('./webpack.prod.conf.js');
// "build": "webpack --display-modules --display-chunks --config build/webpack.prod.conf.js",

var spinner = ora('building for production...');
spinner.start();

var assetsPath = path.resolve(__dirname, '../dist')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

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