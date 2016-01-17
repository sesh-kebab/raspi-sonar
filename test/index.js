var pingReadExtension = require('../');

var sonar = pingReadExtension.sonarFactory(15);
sonar.read(function(msg) {
    console.log('sonar.read callback called: ' + msg);
});