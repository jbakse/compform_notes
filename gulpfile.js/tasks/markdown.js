var gulp = require('gulp');
var browserSync  = require('browser-sync');
var remarkable = require('gulp-remarkable');
var wrap = require("gulp-wrap");
var frontMatter = require("gulp-front-matter");


var handleErrors = require('../lib/handleErrors');
var global_config = require('../config/');
var config = require('../config/markdown');

// var changed     = require('gulp-changed');




gulp.task('markdown', function() {
	return gulp.src(config.src)
		.pipe(frontMatter({property: 'frontMatter', remove: true}))
		.pipe(remarkable({preset: 'full', remarkableOptions: { html: true, linkify: true, typographer: true} }))
		.pipe(wrap({src: config.template}, {base_url: global_config.base_url}))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({ stream:true }));
});
//, {base_url: "base"}, {variable: "data"}
