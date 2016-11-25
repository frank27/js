var fs =require("fs");

/*fs.renameSync("./lib/frank.file","./lib/config.js");

console.log("Config json file renamed");

fs.rename("./lib/notes.md","./notes.md", function(err){
    if(err)
        console.log(err);
    else
        console.log("move file");
});
*/
// remove
try{
    fs.unlinkSync("./lib/config.js");
}
catch(err){
    console.log(err);
}

fs.unlink("notes.md",function(err){
    if(err)
        console.log(err);
    else
        console.log("Notes.md removed");
});
