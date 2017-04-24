var Sonar = require('../').Sonar;

var sonar = new Sonar(29);
function readCallback(duration) {
    var distance = 343.0 * duration / 1000000 * .5;
    console.log('duration: ' + duration + ' distance: ' + distance + 'm');
}

setInterval(function() {
    sonar.read(readCallback);
}, 1000);

console.log('sonar.read() called. Waiting for callback!')