var gulp         = require('gulp'),
    prompt       = require('gulp-prompt'),
    cwd          = process.cwd(),
    jeditor      = require("gulp-json-editor"),
    rename       = require('gulp-rename'),
    template     = require('gulp-template'),
    padNum       = require(cwd + '/gulp/util/helpers').padNum,
    dataFolder   = cwd +'/source/posts/',
    dataTemplate = '_post_template.md',
    dataFile     = '_data.json',
    userInput    = 'userInput',
    today        = new Date().toISOString().slice(0,10),
    dataInfo     = require(dataFolder+dataFile),
    newPostId    = padNum('00000',Object.keys(dataInfo).length+1),
    postName     = newPostId +'_'+(today);


var fragen = [
                {
                  type: "input",
                  name: "ueberschrift",
                  message: "Überschrift"
                },
                {
                  type: "input",
                  name: "tags",
                  message: "Taglist",
                  default: function () { return "js,css"; }
                }
              ];

// MD Datei klonen und erstellen
gulp.task('readwritejson',false ,['userinput'], function () {
   return gulp.src(dataFolder + dataTemplate)
            .pipe(template({ueberschrift: userInput.ueberschrift}))
            .pipe(rename(postName + '.md'))
            .pipe(gulp.dest(dataFolder));
});


// JSON schreiben
gulp.task('writepostfile',false, ['userinput'], function () {
    return gulp.src(dataFolder+dataFile)
            .pipe(jeditor(function(json) {
              var newPostJson = {
                                "title": userInput.ueberschrift,
                                "author": "Tobias Sailer",
                                "email": "tobias.sailer@gmail.com",
                                "date": today,
                                "type": "post",
                                "tags": userInput.tags
                              };
              json[postName] = newPostJson;
              return json; // must return JSON object
            }))
            .pipe(gulp.dest(dataFolder));
});


// Zuerst mal nach dem Titel fragen ..
gulp.task('userinput',false,function () {
  return gulp.src(dataFolder+dataFile,{read:false})
              .pipe(prompt.prompt(fragen,
                    function(antworten) {
                      // Globale Variable füllen
                      userInput = antworten;
                    }
                ));
});

// mit diesem Task erstellen wir einen neuen Post
gulp.task('newpost','erstellt einen neuen Blogartikel' ,['userinput','readwritejson','writepostfile'], function () {
  // dieser Task wird als öffentlicher Task gebraucht .... wichtig sind die Dependencies
  // Unserinput MUSS zuerst laufen .. daher bei den beiden anderen Tasks auch als
  // dependency drin !
});