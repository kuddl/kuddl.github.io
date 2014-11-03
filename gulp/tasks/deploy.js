var deploy = require('gulp-gh-pages'),
    gulp       = require('gulp');


var options = {
    branch: "master"
  };

gulp.task('deploy', 'Schiebt alles auf GITHUB',['compile'], function () {
    return gulp.src('./public/**/*')
        .pipe(deploy(options));
});