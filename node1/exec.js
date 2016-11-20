var exec = require('child_process').exec;

exec("ls", (err,stdout)=>{
    if(err)
    throw err;
    console.log("Listing Finished");
    console.log(stdout);
});
exec("ls -la")