var gulp           = require('gulp'),
browsersync    = require('browser-sync'),
watch          = require('gulp-watch'),
reload         = browsersync.reload,
pgk            = require('../../package.json'),
sourceDir      = pgk.kuddl.sourceDir;

// Hilfstasks fuer watch();
gulp.task('reloadStyles',false, function  () {
    reload("main.css");
});
// Hilfstasks fuer watch();
gulp.task('reload',false, function  () {
    reload();
});


// der eigentliche Watch Task
gulp.task('watch', false, function () {
  // Style Varianten überwachen und injecten
  watch(sourceDir+"/**/*.{sass,scss,less,styl}",function (files,cb) {
    gulp.start('reloadStyles',cb);
  });
  // HTML Varianten überwachen und neu laden
  // Vorerst auch mal JS
  watch(sourceDir+"/**/*.{json,js,md,jade,haml}", function (files,cb) {
    // body...
    gulp.start('reload',cb);
  });
});