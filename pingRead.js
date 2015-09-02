var pingRead = require('./build/Release/pingRead');

pingRead(
	function(msg){
		console.log(msg);
	},
	{
		pinSignal: 29,
		pinTrigger: 28,
		value: 1,
		pulseOut: 500000
	}
);