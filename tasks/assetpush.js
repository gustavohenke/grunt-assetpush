"use strict";

var extensions = {
	js:     /\.js$/i,
	css:    /\.css$/i
};

function appendHtml( contents ) {
	return function( source ) {
		return source + contents;
	};
}

module.exports = function( grunt ) {
	function task() {
		var options = this.options();

		this.files.forEach(function( file ) {
			var contents = "";

			file.src.forEach(function( asset ) {
				if ( extensions.js.test( asset ) ) {
					contents += "<script src=\"" + asset + "\"></script>";
				} else if ( extensions.css.test( asset ) ) {
					contents += "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + asset + "\" />";
				}

				contents += "\n";
			});

			// Overwrite existing file/create it or just append?
			if ( options.overwrite || !grunt.file.exists( file.dest ) ) {
				grunt.file.write( file.dest, contents, {
					encoding: options.encoding
				});
			} else {
				grunt.file.copy( file.dest, file.dest, {
					process: appendHtml( contents )
				});
			}
		});
	}

	grunt.registerMultiTask( "assetpush", "Append HTML tags for JS/CSS files", task );
	//grunt.registerTask( "assetpush", "Append HTML tags for JS/CSS files", task );
};