var express = require('express');
var triplesec = require('triplesec');
var Keybase = require('node-keybase');
var router = express.Router();
var keybase = new Keybase()
/* GET home page. */
router.get('/', function(req, res) {
  res.render('signin.ejs', { title: 'Express' });
});

router.post('/', function(req, res) {
  var passphrase = req.param('password');
  var session = req.param('session');
  triplesec.decrypt ({
        data:          new triplesec.Buffer(passphrase, "hex"),
        key:           new triplesec.Buffer(session),    
        progress_hook: function (obj) { /* ... */ }
  }, function (err, buff) {
        if (! err) { 
          keybase.login(req.param('email'), buff.toString(), function(err, result) {  
              if (! err && result.me != undefined) {
                triplesec.encrypt({
                data: new triplesec.Buffer(result.me.private_keys.primary),
                key: new triplesec.Buffer(session),
                progress_hook: function(obj) { /* ... */}
              }, function (err, buff) {
                if (! err) {
                  res.send({redirect: req.protocol + "://" + req.get('Host'),
                      key: buff.toString('hex')});
                }})} else {
                  res.send({redirect: "", status: 'fail'})
                }}),
            function (err, result) {
              res.send({redirect: "", status: 'fail'});
            }}})});

module.exports = router;
