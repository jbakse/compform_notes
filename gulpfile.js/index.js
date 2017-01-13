////////////////////////////////////
// config

var config = {}

config.publicDirectory = "./docs"
config.sourceDirectory = "./src"
config.contentDirectory = "./content"
config.base_url = "/"
config.gh_pages_base_url = "/comp_form/"

config.markdown = {
	watch: [
		config.contentDirectory + '/**/*.md',
		config.sourceDirectory + "/layouts/default.html",
	],
	src: [config.contentDirectory + '/**/*.md'],
	dest: config.publicDirectory,
	template: config.sourceDirectory + "/layouts/default.html",
}

config.sass = {
	watch: [
		config.sourceDirectory + '/**/*.scss',
	],
	src: [config.sourceDirectory + '/**/main.scss'],
	dest: config.publicDirectory,
}

config.copy = {
	src: [
		config.sourceDirectory + '/**/*',
		config.contentDirectory + '/**/*',
	],
	dest: config.publicDirectory
};


////////////////////////////////////
// deps

var gulp = require('gulp');
var del = require('del');
var changed = require('gulp-changed');
var frontMatter = require("gulp-front-matter");
var remarkable = require('gulp-remarkable');
var wrap = require("gulp-wrap");
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

////////////////////////////////////
// tasks

gulp.task('clean', function(cb) {
	del([config.publicDirectory], cb);
});


gulp.task('copy', function() {
	return gulp.src(config.copy.src)
		.pipe(changed(config.copy.dest)) // Ignore unchanged files
		.pipe(gulp.dest(config.copy.dest))
		.pipe(browserSync.stream());
		;
});

gulp.task('markdown', function() {
	return gulp.src(config.markdown.src)
		.pipe(frontMatter({property: 'frontMatter', remove: true,}))
		.pipe(remarkable({
			preset: 'full',
			remarkableOptions: {
				html: true,
				linkify: true,
				typographer: true,
			},
		}))
		// .pipe(pandoc({
		// 	from: 'markdown',
		// 	to: 'html5',
		// 	ext: '.html',
		// 	args: ['--smart']
		// }))
		.pipe(wrap({src: config.markdown.template}, {base_url: config.base_url}))
		.pipe(gulp.dest(config.markdown.dest))
		.pipe(browserSync.stream());
		;
});

gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest))
	.pipe(browserSync.reload({stream: true}))
	// .pipe(browserSync.stream())
	;
});


gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: config.publicDirectory
		}
	});
});

gulp.task('watch', function() {
	gulp.watch(config.markdown.watch, ['markdown']);
	gulp.watch(config.sass.watch, ['sass']);
	gulp.watch(config.copy.src, ['copy']);
});

gulp.task('default', ['watch', 'copy', 'markdown', 'sass', 'browser-sync']);
