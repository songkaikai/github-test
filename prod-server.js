var express = require('express');
var opn = require('opn');

var app = express();

var router = express.Router();

router.get('',function (req, res, next) {
  req.url = '/html/index.html';
  next();
});

app.use(router);

app.use(express.static('./dist'));

module.exports = app.listen(9000, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:9000'
  console.log('Listening at 9000' + '\n')

  // when env is testing, don't need open it
  opn(uri)
})