# grunt-css-wrap

> wrap css rules in a namespace

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-wrap --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-wrap');
```

## The "css_wrap" task

### Overview
In your project's Gruntfile, add a section named `css_wrap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_wrap: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.selector
Type: `String`
Default value: `''`

The selector of the css-wrapper

### Usage Examples

#### Default Options
Wrap all rules in a css-file with a certain selector.

```js
css_wrap: {
  compile: {
    src: 'src/styles.css',
    dest: 'build/styles.css',
    options: {
      selector: '.my-app'
    }
  }
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

 -  0.1.1: Updated to enable processing of media queries

