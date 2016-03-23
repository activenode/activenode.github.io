var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bourbon = require('node-bourbon').includePaths;


gulp.task('sass', function () {
  return gulp.src('./custom/**/*.scss')
    .pipe(sass({
        includePaths: bourbon
    }).on('error', sass.logError))
    .pipe(gulp.dest('./custom/'));
});

gulp.task('default', function(){
    gulp.watch('./custom/**/*.scss', ['sass']);
});
