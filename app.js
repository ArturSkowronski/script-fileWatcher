var watch = require("watch");
var path = require('path');
var mv = require('mv');
var fs = require('fs');


var parsedJSON = require('./watcher_config.json');
parsedJSON.forEach(function(entry) {
	watch.watchTree(entry.folder, function (f, curr, prev) {
		if (typeof f == "object" && prev === null && curr === null) {
		}
		else if (prev === null) {
			entry.action.forEach(function(entryA) {
				if(entryA.type="move"){
					moveFile(f,entryA.filter,entryA.destination);
				}
			});
		}
		else if (curr.nlink === 0) {
		  //console.log("delete");
		} else {
		  //console.log("edit");
		}
	})
});


function moveFile(f,filters,destination){
	var ext=path.extname(f);
	filters.forEach(function(filter) {
		if(ext==filter.extension){
				console.log('Wykryto plik '+path.normalize(f));
				fs.rename(path.normalize(f), destination + path.basename(f),function(er){
					if(er){}
    				else
  				console.log('Przeniesiono plik '+path.normalize(f)+' do '+destination + path.basename(f)	);
			});
		}
	});
}
