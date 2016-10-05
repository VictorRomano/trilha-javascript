
(function(document, console) {
  'use strict';
  var inputName = document.getElementById('name');
  var sendButton = document.getElementById('send');

  console.log(inputName, sendButton);

  sendButton.addEventListener('click', function() {
    sendMessage(inputName.value)
  });

  function sendMessage(message) {
    console.log(message);
  }
})(document, console);
