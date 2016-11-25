var fs = require("fs");
var path = require("path");

var contents = fs.readFile("./lib/Person.js","UTF-8",function(err, contents){
    if(err){
        console.log(err);
    }
    console.log(contents);
});

fs.readdir("./lib",function(err,files){
    files.forEach(function(filename){
        var file = path.join(__dirname,"lib",filename);
        var stats=fs.statSync(file);
        if(stats.isFile()){
            fs.readFile(file,"UTF-8",function(err,contents){
                console.log(contents);
            });
        }
    });
});
