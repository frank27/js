var questions = [
    "Waht is your name?",
    "Waht is yur fav hbby?",
    "What is you preferred programming language"
];

var answer = [];

function ask(i) {
    process.stdout.write(`\n\n${questions[i]}`);
    process.stdout.write(" > ");
}

process.stdin.on('data', function(data){
    answer.push(data.toString().trim());
    if(answer.length<questions.length) {
        ask(answer.length);
    } else {
        process.exit();
    }
    //process.stdout.write('\n'+data.toString().trim()+'\n');
});

process.on('exit',function(){
    process.stdout.write(`Go ${answer[1]} ${answer[0]} you can finish writing ${answer[2]}`);
});

ask(0);


//process.stdout.write("Hello ");
//process.stdout.write("World \n\n\n ");

