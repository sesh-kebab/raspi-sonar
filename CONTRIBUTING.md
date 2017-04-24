# Contributing to raspi-sonar

If you're interested in in contributing to this library, please free to do so. Contributing doesn't just have to be code changes, but it can also be design changes, documentation or suggestions to make this library better in some way.

## Build

To build the project, execute `sudo npm run build`.

## Testing
A simple example that shows the usage is provided in `./test/index.js` which you can execute by calling `node ./test/index.js`. This will use the latest locally built module. Use this to confirm any changes to the codebase hasn't broken anything. This will require you to physically connect an ultrasonic sensor to you RaspberryPi board.

## Useful Information
Some things to know to help you find you way around the code.

### Native Node Addon
Communicating with an ultrasonic sensor requires sending 10μs on pulse. We then need to measure the exact time it takes,  for sound pulse to travel from the ultrasonic sensor and back. This requires precise timing that isn't possible using just javascript code. Which is why we resort to writing a native module in C, which gives us the ability to interact with the ultrasonic sensor in a more timely manner. See [Node.js Addon] for more information.

### Native abstractions for Node.js (NAN)
> NAN will serve as a thin abstraction layer between the C++ code we write and the Node and V8 APIs so that we can target multiple versions of Node without worrying too much about the changing V8 or Node APIs.

I'm also using Nan helper classes like the AsyncWorker to execute the code that triggers a pulse and waits for a response asynchronously.

### [WiringPi](http://wiringpi.com)
WiringPi is a PIN based C library written in C. We use this library in our native node module to read and write to the GPIO pins.