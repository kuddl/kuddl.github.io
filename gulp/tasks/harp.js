var gulp       = require('gulp'),
    harp       = require('harp'),
    pgk        = require('../../package.json'),
    sourceDir  = pgk.kuddl.sourceDir,
    outputDir  = pgk.kuddl.outputDir;

gulp.task('serve', false, function (done) {
  harp.server(sourceDir, {
    port: 9002
  });
});
gulp.task('compile', 'Statische Seiten bauen', function (done) {
  harp.compile(sourceDir,'../' + outputDir,function() {
    console.log('gebaut');
  });
});