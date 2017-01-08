var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var open = require('open');
var config = require('../config/deploy');
var global_config = require('../config/');

gulp.task('rebase', function() {
	global_config.base_url = global_config.gh_pages_base_url;
});


gulp.task('deploy', ['rebase', 'build:development'],
	function() {



		return gulp.src(config.src)
			.pipe(ghPages(config.ghPages))
			.on('end', function() {
				open(config.url);
			})
	});
