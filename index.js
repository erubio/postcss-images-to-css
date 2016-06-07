var postcss = require('postcss'),
	fs = require('fs'),
	imageSize = require('image-size');

module.exports = postcss.plugin('postcss-images-to-css', function (opts) {
	opts = opts || {
		spriteDir: '/public/images',
		outputFile: '/public/css/sprites.css'
	};

	function getFiles() {
		var path = process.cwd() + opts.spriteDir;
		return fs.readdirSync(path);
	}

	function generateContent(files) {
		var content = '.icon, [class^="icon-"], [class*=" icon-"] {\n\tdisplay: -moz-inline-stack;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\t*vertical-align: auto;\n\tzoom: 1;\n\t*display: inline;\n}';
		files.forEach(function(file) {
			var iconClass = file.split('.png')[0].replace('-hover', ':hover'),
				dimensions = imageSize(process.cwd() + opts.spriteDir + '/' +  file);
			content += '.icon-' + iconClass + '{\n\tbackground-image: resolve("' + file + '");\n\twidth:' + dimensions.width + 'px;\n\theight:' + dimensions.height + 'px;\n\t margin: 0 3px;\n}\n';
		});

		return content;
	}

	function saveCssFile(content) {
		var outputFile = process.cwd() + opts.outputFile;
		fs.writeFileSync(outputFile, content);
	}


	function generateSpriteCss() {
		saveCssFile(generateContent(getFiles()));
	}

	// Work with options here

	return function (/*css, result*/) {
		// Transform CSS AST here
		generateSpriteCss();
	};
});

