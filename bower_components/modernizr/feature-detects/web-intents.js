// Tests for the ability to use Web Intents (//webintents.org).
// By Eric Bidelman

Modernizr.addTest('webintents', function() {
  return !!Modernizr.prefixed('startActivity', navigator);
});
