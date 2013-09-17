var watch = require("watch");
var path = require('path');
var mv = require('mv');
var fs = require('fs');


var parsedJSON = require('./watcher_config.json');

console.log(parsedJSON);



watch.watchTree('C:/bin', function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
      console.log("end");
    } else if (prev === null) {
    	var ext=path.extname(f);
    	if(ext==".avi"){
			fs.rename(path.normalize(f), "C://bin//test//"+path.basename(f),function(er){
				console.log(er)
			});

    	} 
    } else if (curr.nlink === 0) {
      console.log("delete");
    } else {
      console.log("edit");
      if(ext==".avi"){
			fs.rename(path.normalize(function() {};), "C://bin//test//"+path.basename(f),function(er){
				console.log(er)
			});

    	} 	
    }
  })