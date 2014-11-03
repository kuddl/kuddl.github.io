var gulp         = require('gulp'),
    cwd          = process.cwd(),
    jeditor      = require("gulp-json-editor"),
    prompt       = require('gulp-prompt'),
    rename       = require('gulp-rename'),
    template     = require('gulp-template'),
    padNum       = require(cwd + '/gulp/util/helpers').padNum,
    dataFolder   = cwd +'/source/posts/',
    dataTemplate = '_post_template.md',
    dataFile     = '_data.json',
    dataInfo     = require(dataFolder+dataFile),
    today        = new Date().toISOString().slice(0,10),
    newPostId    = padNum('00000',Object.keys(dataInfo).length+1),
    postName     = newPostId +'_'+(today);

// mit diesem Task erstellen wir einen neuen Pos
    console.log(__dirname);
    console.log(process.cwd());
gulp.task('newpost','erstellt einen neuen Post',function () {

    // JSON schreiben
    gulp.src(dataFolder+dataFile)
      .pipe(jeditor(function(json) {
        json[postName] = {
                          "title": "POST " + newPostId,
                          "author": "Tobias Sailer",
                          "email": "tobias.sailer@gmail.com",
                          "date": today,
                          "type": "post"
                        };
        return json; // must return JSON object.
      }))
      .pipe(gulp.dest(dataFolder));

    // jetzt die MD Datei
     gulp.src(dataFolder + dataTemplate)
      .pipe(template({ueberschrift: today}))
      .pipe(rename(postName + '.md'))
      .pipe(gulp.dest(dataFolder));

    console.log('Datei erstellt: ' + postName);

});