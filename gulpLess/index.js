var path = require('path');

var config = require('config');
var gulp = require('gulp');
var less = require('gulp-less');
var lessPluginCleanCSS = require('less-plugin-clean-css');

gulp.task('gulpLess', function() {
    var srcs = [path.join(config.get('root'), './src/css/**/*.less')];
    config.get('server.less.customFile').forEach(function(p) {
        srcs.push('!' + p);
    });
    return gulp.src(srcs).pipe(less({
        plugins: [new lessPluginCleanCSS({
            advanced: true
        })]
    })).pipe(gulp.dest(path.join(config.get('root'), './src/css')));
});
