
(function(window) { //IIFE function
  var speakWord = "Good Bye";  // Define speakWord variable
  var byeSpeaker = {};    // Define helloSpeaker object
  byeSpeaker.speak = function (name) {    // Define speak method on helloSpeaker object
    console.log(speakWord + " " + name);
};
  window.byeSpeaker = byeSpeaker;    // Expose helloSpeaker object to global scope
})(window);