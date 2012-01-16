var fs = require('fs');

module.exports = {
	snip : function snip(data) {
		data = data.replace(/<!-- snip:[/]?([^> ]+)[^>]* -->/g, function(match, submatch){
			console.log("File to snip out:"+submatch);
			return snip(fs.readFileSync('snips/'+submatch, 'utf8'));
			});
		
		return data;
	}
}