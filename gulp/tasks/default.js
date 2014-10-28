var gulp       = require('gulp'),
    bs         = require('browser-sync'),
    reload     = bs.reload,
    pgk        = require('../../package.json'),
    sourceDir  = pgk.kuddl.sourceDir;

gulp.task('watch', false, function () {
    gulp.watch(sourceDir+"/**/*.{jade,haml,sass,scss,less,styl}", function() {
      reload("main.css");
    });
    gulp.watch(sourceDir+"/**/*.{jade,haml}", function() {
      reload();
    });
});

gulp.task('default', false, ['help']);
gulp.task('work','Harp Server und Watch', ['serve', 'browser-sync', 'watch']);