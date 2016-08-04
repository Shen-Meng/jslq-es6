var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

var gulp = require('gulp'),
    concats = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// Load plugins
var $ = require('gulp-load-plugins')();

/* es6 */
gulp.task('es6', function() {
  return gulp.src('js/src/*.js')
    .pipe($.plumber())
    .pipe($.babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('js/lib/'));
});

gulp.task('less', function(){
  gulp.src('less/app.less')
    .pipe(less())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['less', 'es6'],function(){
  browserSync.init({
    server: './'
  });

  gulp.watch("less/*.less", ['less']);
  gulp.watch("js/src/*.js", ['es6']);
  gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
