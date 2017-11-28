/**
 * Created by mapbar_front on 2017/11/19.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
});

gulp.task('inject',['scripts','styles'],function () {
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/**/*.css'),
        path.join('!' + conf.paths.tmp, '/serve/vendor.css')
    ], { read: false });

    var injectScripts = gulp.src([
        path.join(conf.paths.src, '/**/*.module.js'),
        path.join(conf.paths.src, '/**/*.js'),
        path.join('!' + conf.paths.src, '/**/*.spec.js'),
        path.join('!' + conf.paths.src, '/**/*.mock.js'),
    ]);

    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/*.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

gulp.task('injectActive',['scripts','styles'],function () {
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/**/*.css'),
        path.join('!' + conf.paths.tmp, '/serve/vendor.css')
    ], { read: false });

    var injectScripts = gulp.src([
        path.join(conf.paths.src, '/**/*.module.js'),
        path.join(conf.paths.src, '/**/*.js'),
        path.join('!' + conf.paths.src, '/**/*.spec.js'),
        path.join('!' + conf.paths.src, '/**/*.mock.js'),
    ]);

    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/**/active.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});