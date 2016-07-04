var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

gulp.task('less', function(){
  gulp.src('less/app.less')
    .pipe(less())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['less'],function(){
  browserSync.init({
    server: '../app/'
  });

  gulp.watch("less/*.less", ['less']);
  gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
