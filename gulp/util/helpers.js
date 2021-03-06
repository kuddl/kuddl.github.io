/* Copied from https://github.com/greypants/gulp-starter/blob/master/gulp/util/scriptFilter.js */

// Es werden alle js und coffee Dateien gefudnen,
// aber alle Dateien mit _ oder . am Anfang werden ignoriert
module.exports.scriptFilter = function(name) {
    return /(^[^_.].+?\.(js|coffee)$)/i.test(name);
};

module.exports.padNum = function(mask,num) {
    return (mask + num).slice(-Math.max(mask.length, (num + "").length));
};