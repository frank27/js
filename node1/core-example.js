var path = require('path');
var util = require('util');
var v8 = require('v8');

console.log(path.basename(__filename));

var dirUploads = path.join(__dirname, 'www','js','uploads');

util.log(dirUploads);

util.log(v8.getHeapStatistics());