var deploy = require('gulp-gh-pages');
var gulp       = require('gulp');


var options = {
    branch: "master"
  };

gulp.task('deploy', function () {
    return gulp.src('./public/**/*')
        .pipe(deploy(options));
});