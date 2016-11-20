'use strict';
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('customEvent',(message, status)=>{
    console.log(`${status} : ${message}`);
});

emitter.emit('customEvent','Hello World',200);

// 
var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Person = function(name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);

var ben = new Person("BEn Franklin");
ben.on('speak', (said)=>{
    console.log(`${ben.name}: ${said}`);
});
ben.emit('speak',"You may delay, but time will not.");


