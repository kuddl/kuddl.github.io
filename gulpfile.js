var gulp       = require('gulp'),
    harp       = require('harp'),
    bs         = require('browser-sync'),
    reload     = bs.reload,
    pgk        = require('./package.json'),
    sourceDir  = pgk.kuddl.sourceDir;

gulp.task('serve', function (done) {
  harp.server(sourceDir, {
    port: 9002
  });
});

gulp.task('watch', function () {
    gulp.watch(sourceDir+"/**/*.{jade,styl,haml,sass,scss,less}", reload);
});

gulp.task('browser-sync', function() {
  bs({
    proxy: "localhost:9002"
  });
});
gulp.task('default', ['serve', 'browser-sync', 'watch']);