# postcss-images-to-css
Postcss plugin to create css file with rules for icons from files in a folder


## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install postcss-images-to-css- --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:


### [Grunt PostCSS](https://github.com/nDmitry/grunt-postcss)

```js

grunt.initConfig({
  postcss: {
    options: {
      processors: [
        require('postcss-sprites-css')({
			spriteDir: '/public/images/sprite',
			outputFile: '/public/css/sprites.css'
		})
      ]
    },
    dist: { src: 'build/*.css' }
  },
});
```

### Usage

You have some images in the spriteDir an in file /public/css/sprites.css will generate:

```css
.icon, [class^="icon-"], [class*=" icon-"] {
	display: -moz-inline-stack;
	display: inline-block;
	vertical-align: middle;
	**vertical-align: auto;
	zoom: 1;
	**display: inline;
}
.icon-alert-dialog-modal{
	background-image: resolve("alert-dialog-modal.png");
	width:17px;
	height:26px;
	 margin: 0 3px;
}
```

### Options


### spriteDir: 
	Type: String
	Default: '/public/images/sprite'

	Set the folder where your images are placed

### outputFile
	Type: String
	Default: '/public/css/sprites.css'

	Set the file where css rules will be written.


### Contributing / Issues

You may want to contribute to this project, pull requests are welcome if you accept to publish under the MIT licence.