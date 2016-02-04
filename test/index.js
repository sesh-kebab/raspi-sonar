var pingReadExtension = require('../');

var sonar = pingReadExtension.sonarFactory(15);
sonar.read(function(duration) {
    var distance = 343.0 * duration / 1000000 * .5;
    
    console.log('duration: ' + duration + ' distance: ' + distance + 'm');
});

console.log('sonar.read() called. Waiting for callback!')