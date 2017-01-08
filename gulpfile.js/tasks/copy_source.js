var browserSync = require('browser-sync');
var changed     = require('gulp-changed');
var config      = require('../config/copy_source');
var gulp        = require('gulp');

gulp.task('copy_source', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
