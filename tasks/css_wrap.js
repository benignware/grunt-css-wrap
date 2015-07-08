/*
 * grunt-css-wrap
 * https://github.com/benignware/grunt-css-wrap
 *
 * Forked and enhanced
 * https://github.com/zanzamar/grunt-css-wrap
 *
 * Copyright (c) 2014 Rafael Nowrotek
 * Licensed under the MIT license.
 *
 * Copyright (c) 2014 Zanzamar 0.1.1
 *
 */

'use strict';

var
  css_wrap = require( 'css-wrap' ),
  chalk = require( 'chalk' );

module.exports = function( grunt ) {
	grunt.registerMultiTask( 'css_wrap', 'Wrap CSS rules in a namespace', function() {

		var options = this.options({
			// defaults
			selector: ".css-wrap"
		});

		this.files.forEach( function( f ) {
			f.src.forEach( function( src ) {
				grunt.file.write( f.dest, css_wrap( src, options ) );
			});
		});
	});
};