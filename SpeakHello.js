
(function(window) { //IIFE function
  var speakWord = "Hello";  // Define speakWord variable
  var helloSpeaker = {};    // Define helloSpeaker object
  helloSpeaker.speak = function (name) {    // Define speak method on helloSpeaker object
    console.log(speakWord + " " + name);
};
  window.helloSpeaker = helloSpeaker;    // Expose helloSpeaker object to global scope
})(window);