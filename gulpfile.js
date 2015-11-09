var gulp = require('gulp'),
    sass = require('gulp-sass');



gulp.task('sass', function () {
  gulp.src('./development/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./production/css/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./development/assets/scss/*.scss', ['sass']);
});

gulp.task('default',['sass:watch']);
