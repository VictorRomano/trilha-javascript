(function PersonController(document, console, Person) {
  'use strict';

  var sendButton = document.getElementById('send');
  var username = document.getElementById('username');
  var email = document.getElementById('email');

  sendButton.addEventListener('click', function() {
    var person = new Person(username.value, email.value);
    console.log(person);
  });

})(document, console, Person);
