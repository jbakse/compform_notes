var gulp         = require('gulp')
var gulpSequence = require('gulp-sequence')

gulp.task('build:development', function(cb) {
  gulpSequence('clean', ['copy_source', 'markdown'], /*['fonts', 'iconFont', 'images', 'svg-sprite'], ['sass', 'webpack:development', 'html'],*/ cb)
});
