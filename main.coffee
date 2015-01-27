$ = jQuery

fs  = require('fs')
account_path = 'account.json'

messages = $('#messages')

$(document).ready ->
  fs.exists account_path, (exists) ->
    if not exists
      $('#messages').append $('<li class="list-group-item">TEST</li>')
