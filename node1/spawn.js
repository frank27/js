var spawn  = require("child_process").spawn;

var cp = spawn("node",["EventEmitter"]);

cp.stdout.on("data", (data)=>{
    console.log(`STDOUT: ${data.toString()}`)
});

cp.on("close", ()=>{
    console.log("Child process has ended");
    process.exit();
});

setTimeout(()=>{
    cp.stdin.write("stop");
},4000);