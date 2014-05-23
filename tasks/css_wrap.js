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
module.exports = function(grunt) {
    
  grunt.registerMultiTask('css_wrap', 'wrap css rules in a namespace', function() {
     
    var options = this.options({
      // defaults
      name: ""
    });
    
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file ' + filepath + ' not found.');
          return false;
        } else {
          return true;
        }
      });

      if (src.length === 0) {
        grunt.log.warn('Destination ' + f.dest + ' not written because src files were empty.');
        return;
      }
      
      
      var css = grunt.file.read(f.src);
      
      var obj = parse(css);

      // Print parsed object as CSS string
      
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
      
      grunt.file.write(f.dest, output);
      
    });
  });
    
};
