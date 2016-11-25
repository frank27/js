var fs = require("fs");

var md=`

Sample Markdown  Title
===============================

Sample subtitle
_-----------------

*point 
*point
*point
* point 
`;

fs.writeFile("Sample.md",md.trim(), function(){
console.log("Flie Creted")
});