var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('contacts.ejs', { title: 'Express' });
});

module.exports = router;
