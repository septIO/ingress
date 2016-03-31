var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var user = {
    username : 'admin',
    uid: 23
    
  }
  res.render('index', { title: 'Express', team: 'Grønt Taastrup' });
});

module.exports = router;
