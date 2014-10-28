var gulp       = require('gulp'),
    bs         = require('browser-sync'),
    reload     = bs.reload,
    pgk        = require('../../package.json'),
    sourceDir  = '../../' + pgk.kuddl.sourceDir;

gulp.task('browser-sync', false, function() {
  bs({
    proxy: "localhost:9002"
  });
});
