var config = require('config');
var gulp = require('gulp');
var promise = require('bluebird');

var gulpLess = require('./gulpLess');

module.exports.start = function() {
    return new promise(function(resolve) {
        var tasks = [];
        var loadTask = config.get('gulp.tasks');
        for (var i in loadTask) {
            if (loadTask[i]) {
                tasks.push(i);
            }
        }

        gulp.start(tasks, resolve);
    });
};
