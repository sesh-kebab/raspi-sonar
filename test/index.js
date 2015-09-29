var pingReadExtension = require('../');

pingReadExtension.pingRead(
	{
		pinSignal:29,
		pinTrigger:28,
		value:1,
		pulseOut:500000
	}, 
	function(msg) {
		console.log('callback called' + msg);
	}
);