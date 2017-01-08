var gulp      = require('gulp');
// var html      = require('../config/html');
// var iconFont  = require('../config/iconFont');
// var svgSprite = require('../config/svg-sprite');
// var images    = require('../config/images');
var markdown      = require('../config/markdown');
var copy_source     = require('../config/copy_source');
var watch     = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  // watch(images.src, function() { gulp.start('images'); });
  watch(markdown.watch, function() { gulp.start('markdown'); });
  // watch(iconFont.src, function() { gulp.start('iconFont'); });
  // watch(svgSprite.src, function() { gulp.start('svg-sprite'); });
  watch(copy_source.src, function() { gulp.start('copy_source'); });
  // watch(html.watch, function() { gulp.start('html'); });
});
