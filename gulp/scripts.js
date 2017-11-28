/**
 * Created by mapbar_front on 2017/11/19.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var browserSync = require('browser-sync');

//在watch监控的时候，重新刷新浏览器----------如何在js改变的情况下，注入不同的页面？？
gulp.task('scripts-reload', function() {
    return buildScripts()
        .pipe(browserSync.stream());
});
//js预处理，代码格式化和压缩
gulp.task('scripts', function () {
    return buildScripts();
});
function buildScripts() {
    return gulp.src(path.join(conf.paths.src, '/**/*.js'))
        .pipe($.eslint())
        .pipe($.eslint.format())
        .pipe($.size())
};



































