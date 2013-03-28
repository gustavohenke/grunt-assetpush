# grunt-assetpush
> Append HTML tags for JS/CSS files.

## Getting started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-assetpush --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-assetpush");
```

## Assetpush task
_Run this task with the `grunt assetpush` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### overwrite
Type: `Boolean`
Default: false

Whether an existing file should be replaced or not.


#### encoding
Type: `String`
Default: utf8

What encoding should be used when writing the HTML tags.

### Usage examples
```js
assetpush: {
    js: {
        files: {
            "path/to/scripts.html": ["path/to/*.js", "another/path/to/file.js" ]
        }
    },
    css: {
        files: {
            "path/to/styles.html": "path/to/styles.css"
        }
    }
}
```
