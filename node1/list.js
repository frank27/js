var fs  =require("fs");

//var files = fs.readdirSync('./');
//asyncronosly way
var files = fs.readdir('./', function(err, files) {
    if(err){
        throw err;
    }
    console.log(files);
});

//console.log(files);
console.log("Reading Files---");