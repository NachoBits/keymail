$("form").submit(function (e) {
  e.preventDefault();
  var pass = document.getElementById("password").value;
  var salt = CryptoJS.lib.WordArray.random(128/8);
  var key = CryptoJS.PBKDF2(pass , salt, { keySize: 512/32 });
/*  $("body").append('<div class="progress"> \
      <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"> \
      </div> \
      </div> \
      <h2 style="text-align:center;">Generating session key and authenticating...</h2>');*/
  triplesec.encrypt ({
    data:          new triplesec.Buffer(pass),
    key:           new triplesec.Buffer(key.toString()),
    progress_hook: function (obj) { /* ... */ }
  }, function(err, buff) {
    if (! err) { 
      pass = buff.toString('hex');
      $.post(window.location.href, {password: pass, session: key.toString(),
        email: document.getElementById("email").value},
        function (response) {
          document.cookie="session=" + key;
          document.cookie="key=" + response.key;
          window.location = response.redirect;
        });
    } else {
      alert(err);
    }
  });
});
