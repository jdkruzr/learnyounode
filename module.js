'use strict';

// fs module, I summon thee!
var fs = require('fs');
var path = require('path');

module.exports = function (arg1, arg2, callback) {
	fs.readdir(arg1, function(err, files) {
	   if (err) callback(err, null);
    
       var result = [];
       
	   var matchingFiles = files.filter(function(file) {

	       if (path.extname(file) === "." + arg2) {
               // console.log(file);
	           result.push(file);
	       }
	   });
       
	callback(null, result);
	
	});
	}
