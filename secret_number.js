'use strict';
module.exports = function() {

var secretNumberGenerator = Math.floor((Math.random() * 1000000) + 1);

console.log('secretNumberGenerator',secretNumberGenerator);

  function secretNumber(){

    return secretNumberGenerator;

  }

  return secretNumber;

};
