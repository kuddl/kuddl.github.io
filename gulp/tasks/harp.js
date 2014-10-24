var gulp       = require('gulp'),
    harp       = require('harp'),
    pgk        = require('../../package.json'),
    sourceDir  = pgk.kuddl.sourceDir;

gulp.task('serve', false, function (done) {
  harp.server(sourceDir, {
    port: 9002
  });
});