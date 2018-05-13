const winston = require('winston')

function log(log) {
	var time = date.now();
	winston.log('info', 'Hello log files!', {
	  someKey: 'some-value'
	})
}

//export log;