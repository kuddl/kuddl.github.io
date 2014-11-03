var fs           = require('fs'),
    SkriptFilter = require('./util/helpers').scriptFilter,
    tasks        = fs.readdirSync('./gulp/tasks/').filter(SkriptFilter);

// help als erstes !
require('./tasks/help');

// Jetzt alle Tasks
tasks.forEach(function(task) {
    if(task != 'help.js'){
        require('./tasks/' + task);
    }
});