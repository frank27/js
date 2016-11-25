var fs = require("fs");

//fs.renameSync("./assets/logs", "./logs");

console.log("Directory Method");

/*fs.rmdir("./assets",function(err){
    if(err)
        throw er;
    console.log("Assets  Directory Rremoved");
});*/

fs.readdirSync("./logs").forEach(function(fileName){
    fs.unlinkSync("./logs/"+fileName);
});
fs.rmdir("./logs",function(err){
    if(err)
        throw er;
    console.log("Assets  Directory Rremoved");
});