var gulp       = require('gulp'),
    bs         = require('browser-sync'),
    reload     = bs.reload,
    pgk        = require('../../package.json'),
    sourceDir  = pgk.kuddl.sourceDir;

gulp.task('watch', false, function () {
    // Style Varianten überwachen und injecten
    gulp.watch(sourceDir+"/**/*.{sass,scss,less,styl}", function() {
      reload("main.css");
    });
    // HTML Varianten überwachen und neu laden
    // Vorerste auch mal JS
    gulp.watch(sourceDir+"/**/*.{js,md,jade,haml}", function() {
      reload();
    });
});