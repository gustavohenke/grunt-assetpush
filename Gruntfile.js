"use strict";

module.exports = function( grunt ) {
	grunt.initConfig({
		jshint: {
			all: [ "Gruntfile.js", "tasks/*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		assetpush: {
			files: {
				"test.html": "*.js"
			}
		}
	});

	grunt.loadTasks("tasks");

	grunt.registerTask("default", [ "assetpush" ] );
};