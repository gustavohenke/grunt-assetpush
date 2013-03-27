/**
 * grunt-contrib-assetpush
 * Grunt task for appending HTML tags for JS/CSS files
 *
 * https://github.com/gustavohenke/grunt-contrib-assetpush
 */
"use strict";

module.exports = function( grunt ) {
	// Project configuration...
	grunt.initConfig({
		jshint: {
			all: [ "Gruntfile.js", "tasks/*.js", "test/*.js" ],
			options: {
				jshintrc: ".jshintrc"
			}
		},
		clean: {
			test: [ "tmp" ]
		},
		assetpush: {
			"tmp/js.html": [ "test/fixtures/*.js" ],
			"tmp/css.html": [ "test/fixtures/*.css" ],
			"tmp/both.html": [ "test/fixtures/*.css", "test/fixtures/*.js" ]
		},
		nodeunit: {
			tests: [ "test/*_test.js" ]
		}
	});

	// Dependencies
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-nodeunit");
	grunt.loadNpmTasks("grunt-contrib-clean");

	// Actually load the module tasks...
	grunt.loadTasks("tasks");

	// Clean the tmp folder, run this plugin task, run the unit tests and then clean the tmp folder again.
	grunt.registerTask( "test", [ "clean", "assetpush", "nodeunit", "clean" ] );

	// By default, just lint JS files and run tests.
	grunt.registerTask( "default", [ "jshint", "test" ] );
};