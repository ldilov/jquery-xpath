var compressor = require('node-minify');

// Using Google Closure Compiler
compressor.minify({
 compressor: 'gcc',
 input: 'jquery.xpath.js',
 output: 'jquery.xpath.min.js',
 callback: function (err, min) {
     console.log(err);
 }
});