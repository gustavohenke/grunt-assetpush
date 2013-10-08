module.exports = function( grunt ) {
	"use strict";

	var urlRegex = /^(?:https?:)?\/\//i;

	// Files may have an query string; possibly this is a URL.
	var extensions = {
		js:     /\.js(?:\?.*)?$/i,
		css:    /\.css(?:\?.*)?$/i
	};

	function appendHtml( contents ) {
		return function( source ) {
			return source + contents;
		};
	}

	function task() {
		var options = this.options();

		this.files.forEach(function( file ) {
			var contents = "";

			// Iterate thru the original src, mapping to local files when possible or to URLs, if it's the case
			// This is a fix for issue #2
			var files = file.orig.src.map(function( f ) {
				if ( !urlRegex.test( f ) ) {
					console.log(f);
					f = grunt.file.expand( f );
				}

				return f;
			});

			// Flatten the resulting array
			files = grunt.util._.flatten( files );

			files.forEach(function( asset ) {
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
};