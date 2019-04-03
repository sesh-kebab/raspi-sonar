# raspi-sonar

RaspberryPi - Native Node.js extention to interact with an Ultrasonic Sensor.

Initially stand alone extension written in C++. The end goal is to integrate it into [raspi-io](https://github.com/sesh-kebab/raspi-sonar/new/master?readme=1) IO Plugin for [johnny-five](https://github.com/rwaldron/johnny-five). Specifically to support the pingRead method of an IO plugin, which can't be implemented using javascript alone and requires native code.

Relevant links:

* [raspi-sonar wiki](https://github.com/sesh-kebab/raspi-sonar/wiki)
* [Johnny-Five Issue #842](https://github.com/rwaldron/johnny-five/issues/842)
* [raspi-io PR 48](https://github.com/nebrius/raspi-io/pull/48)

## Installation

`npm install raspi-sonar`

## Example

Note that GPIO pins are rated at 3.3v. An ultrasonic sensor like the HC-SR04 outputs 5v on the echo pin which could harm your Raspberry Pi's GPIO pins. Take care to use a voltage divider circuit to lower the voltage from the ECHO pin to the GPIO pin.

### Circuit

<img src="https://github.com/sesh-kebab/raspi-sonar/blob/master/docs/sonar-circuit.png" width="480" />

### Code

```javascript
var Sonar = require('raspi-sonar').Sonar;
var sonarPin1 = new Sonar(29);

sonarPin1.read(function(duration) {
  var distance = 343.0 * duration / 1000000 * .5;
  console.log('duration: ' + duration + ' distance: ' + distance + 'm');
});
```

## API

raspi-sonar npm package exposes a single class called Sonar. The Sonar class has a single public method that takes the wiringPi pin number as an argument. If you installed [wiringPi](http://wiringpi.com) (which will automatically be installed when you install the raspi-sonar package), you can check the which pin number to use by typing the command `gpio readall`. The output for a Raspberry Pi B+ would look like the below diagram. Note the 'wPi' columns.

<img src="https://github.com/sesh-kebab/raspi-sonar/blob/master/docs/gpio-readall.png" width="480" />

### License

The MIT License (MIT)

Copyright (c) 2016 Seshi Chemudugunta

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
