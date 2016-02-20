'use strict';

var async_fs_module = require('./module.js');

// console.log("path is " + process.argv[2] + ", ext is " + process.argv[3]);

async_fs_module(process.argv[2], process.argv[3], function(err, files) {
    // console.log("files array is of length " + files.length);
    for(var i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});
