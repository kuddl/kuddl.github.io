/*  help task
    Dieser Task sollte der "Default" sein.
    Jeder Task sollte seine eigene kurze Beschreibung haben.
*/
/* brauchen wir immer */
var gulp = require('gulp'),
    pkg  = require('../../package.json'),
    help = require('gulp-help');

    help(gulp,
        { description: false}
    );
