var httpobj = require('http');

httpobj.get(process.argv[2], function callback(response) {
    
    response.on("data", function(data) { 
        console.log(data.toString());
    });
    
    response.on("error", function(error) {
        console.log("Got error: " + error.message);
    });
    
//    response.on("end", function() {
//       console.log("Done!");
//    });
    
});