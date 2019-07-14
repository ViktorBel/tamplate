"use strict";
// код здесь обрабатывается в строгом режиме

var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('dist/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('dist/scss/**/*.scss', gulp.series('sass'));
});