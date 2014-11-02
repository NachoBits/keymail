var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('signin.ejs', { title: 'Express' });
});

router.post('/', function(req, res) {
  res.send(req.protocol + "://" + req.get('Host'));
});

module.exports = router;
