/**
 * grunt-assetpush
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
			"tmp/js.html": [
				"test/fixtures/*.js",
				"http://example.com/my/script.js?cache=123"
			],
			"tmp/css.html": [
				"test/fixtures/*.css",
				"//example.com/my/style.css"
			],
			"tmp/both.html": [ "test/fixtures/*.css", "test/fixtures/*.js" ]
		},
		nodeunit: {
			tests: [ "test/*_test.js" ]
		},
		jscs: {
			main: [ "tasks/*.js", "test/*.js" ]
		}
	});

	// Dependencies
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-nodeunit" );
	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-jscs-checker" );

	// Actually load the module tasks...
	grunt.loadTasks( "tasks" );

	// Clean the tmp folder, run this plugin task, run the unit tests and then clean the tmp folder again.
	grunt.registerTask( "test", [ "clean", "assetpush", "nodeunit", "clean" ] );

	// By default, just lint JS files and run tests.
	grunt.registerTask( "default", [ "jshint", "jscs", "test" ] );
};