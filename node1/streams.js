var fs = require("fs");
/*fs.readFile("./chat.log","UTF-8",function(err, chatLog){
    console.log(`File Read ${chatLog.length}`)
});*/

var stream = fs.createReadStream("./chat.log","UTF-8");

var data = "";

stream.once("data",function(){
    console.log("Started Reading File");
});

stream.on("data",function(chunk){
    process.stdout.write(`  chunk: ${chunk.length}`);

    data+=chunk;
});

stream.on("end", function(){
    console.log(`Finish Reading File ${data.length}`);
});