var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  styles: ['./scss/*.scss']
};

gulp.task('sass', function () {
  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['sass']);
});

gulp.task('default', ['watch']);
