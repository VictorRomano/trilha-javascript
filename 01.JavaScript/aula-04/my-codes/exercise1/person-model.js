var Person = (function PersonModel() {
  'use strict';

  function Person(username, email) {
    this.username = username;
    this.email = email;
  }
  
  return Person;
})();
