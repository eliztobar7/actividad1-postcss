var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssnested = require('postcss-nested')
var browserSync = require('browser-sync').create()

gulp.task('serve', function () {
	browserSync.init({
		server: {
			baseDir: './dist'
		}
	})
})

gulp.task('css', function () {
	var processors = [		
    cssnested
	]

	return gulp.src('./src/fresh.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream())
})

gulp.task('watch', function () {
	gulp.watch('./src/*.css', ['css'])
	gulp.watch('./dist/*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])