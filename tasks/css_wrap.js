/*
 * grunt-css-wrap
 * https://github.com/benignware/grunt-css-wrap
 *
 * Copyright (c) 2014 Rafael Nowrotek
 * Licensed under the MIT license.
 */

'use strict';

var parse = require('css-parse');
var stringify = require('css-stringify');
var chalk = require('chalk');

module.exports = function(grunt) {
    
  grunt.registerMultiTask('css_wrap', 'wrap css rules in a namespace', function() {
     
    var options = this.options({
      // defaults
      selector: ".css-wrap"
    });
    
    var dest;

    this.files.forEach(function(f) {
      
      f.src.forEach(function(src) {
        
          dest = f.dest;
          
          var css = grunt.file.read(src);
      
          var obj = parse(css);
    
          var rules = obj.stylesheet.rules;
          rules.forEach(function(r) {
            
            if (r.selectors) {
              r.selectors.forEach(function(s, index) {
                var selector = options.selector ? options.selector + " " + s : s;
                r.selectors[index] = selector;
              });
            }
            
          });
          
          var output = stringify(obj);
          
          grunt.file.write(dest, output);
        
      });
      
    });
    
  });
  
  
    
};
