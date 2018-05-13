const winston = require('winston')

function log(log) {
	var time = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
	var dir = __dirname;
	var file = __filename;
//winston doesnt seem to like this...
console.log(time, 'info', log, {
	  Directory: dir

	})
}
module.exports = log;
