$ = jQuery

fs  = require('fs')
account_path = 'account.json'

messages = $('#messages')

$(document).ready ->
  fs.exists account_path, (exists) ->
    if not exists
      console.log(messages)
      messages.append($('<div class="alert alert-danger" role="alert">
  <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
  <span class="sr-only">Error:</span>
  No Accounts added. <a href="#"> Add account now?</a>
</div>'))
