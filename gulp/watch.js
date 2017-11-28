/**
 * Created by mapbar_front on 2017/11/19.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch',function () {
    //监听主页变动
    gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

    //监听其他html的变动
    gulp.watch(path.join(conf.paths.src, '/**/*.html'), function(event) {
        browserSync.reload(event.path);
    });
    //监听css的变动
    gulp.watch(path.join(conf.paths.src, '/**/*.css'), function (event) {
        if(isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });
    //监听js的变动
    gulp.watch([path.join(conf.paths.src, '/**/*.js'),'./src/js/index.js'], function (event) {
        console.log(event);
        if(isOnlyChange(event)) {
            gulp.start('scripts-reload');
        } else {
            gulp.start('inject-reload');
        }
    });
});

































