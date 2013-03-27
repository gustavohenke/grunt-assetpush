"use strict";
var grunt = require("grunt");

exports.assetpush = {
	js: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read("tmp/js.html");
		var expected = grunt.file.read("test/expected/js.html");

		test.equal( actual, expected, "JS assets should compile as a bunch of <script> tags" );
		test.done();
	},
	css: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read("tmp/css.html");
		var expected = grunt.file.read("test/expected/css.html");

		test.equal( actual, expected, "CSS assets should compile as a bunch of <link> tags" );
		test.done();
	},
	both: function( test ) {
		test.expect( 1 );

		var actual = grunt.file.read("tmp/both.html");
		var expected = grunt.file.read("test/expected/both.html");

		test.equal( actual, expected, "JS and CSS assets should compile as a bunch of <script> and <link> tags" );
		test.done();
	}
};