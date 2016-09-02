var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  gulp.src(['./views/**/*.jade', '!./views/_**/*.*'])
    .pipe(jade())
    .pipe(gulp.dest('./app'))
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('styles', function() {
    gulp.src('sass/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('watch', function(){
	gulp.watch('./sass/**/*.+(scss|sass)', ['styles']);
	gulp.watch('./views/**/*.jade', ['templates']);
})

gulp.task('default', ['browser-sync', 'templates', 'styles', 'watch']);