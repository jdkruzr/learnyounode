'use strict';

// fs module, I summon thee!
var fs = require('fs');

// console.log("Passed path is: " + process.argv[2]);

var my_file_data = "";
var data = Buffer.new;

fs.readFile(process.argv[2], function(err, data) {
	// console.log(arguments);
	if (err) throw err;
	var my_file_data = data.toString();
	// console.log(my_file_data);
	var splitted = my_file_data.split("\n");
	console.log(splitted.length-1);
	})


//var file_text = my_file_data.toString();
//var text_array = file_text.split("\n");

// console.log(text_array[3]);

