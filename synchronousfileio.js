// fs module, I summon thee!
var fs = require('fs');

// console.log("Passed path is: " + process.argv[2]);

var file_text = fs.readFileSync(process.argv[2]).toString();

var text_array = file_text.split("\n");

// console.log(text_array[3]);

console.log(text_array.length-1);