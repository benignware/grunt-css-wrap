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
 * Copyright (c) 2014 Zanzamar
 *
 */

'use strict';

var parse = require( 'css-parse' );
var stringify = require( 'css-stringify' );
var chalk = require( 'chalk' );

module.exports = function( grunt ) {
	grunt.registerMultiTask( 'css_wrap', 'wrap css rules in a namespace', function() {
		function processRules( list ) {
			return list.map( function( r ) {
				if ( r.selectors ) {
					r.selectors.forEach( function( s, index ) {
						var selector = options.selector ? options.selector + " " + s : s;
						r.selectors[ index ] = selector;
					});
				}
				if( r.type === "media" ) {
					r.rules = processRules( r.rules );
				}
				return r;
			});
		}

		var options = this.options({

			// defaults
			selector: ".css-wrap"
		});

		var dest;
		this.files.forEach( function( f ) {
			f.src.forEach( function( src ) {
				dest = f.dest;
				var css = grunt.file.read( src );
				var obj = parse( css );
				obj.stylesheet.rules = processRules( obj.stylesheet.rules );
				var output = stringify( obj );
				grunt.file.write( dest, output );
			});
		});
	});
};