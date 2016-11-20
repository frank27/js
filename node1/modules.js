var Person = require('./lib/Person');

var ben = new Person("BEn Franklin");
ben.on('speak', (said)=>{
    console.log(`${ben.name}: ${said}`);
});
ben.emit('speak',"You may delay, but time will not.");

var george = new Person("George  Washington");
george.on('speak', (said)=>{
    console.log(`${george.name}: ${said}`);
});
george.emit('speak',"It is far better to be alone, than to be in bad company.");
