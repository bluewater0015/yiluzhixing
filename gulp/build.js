/**
 * Created by mapbar_front on 2017/11/19.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


//项目清理
gulp.task('clean', function () {
    return $.del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
});


//把src/index.html放在dist目录下，用于上线打包。
gulp.task('html',function () {
    return gulp.src(path.join(conf.paths.src, '/index.html'))
        .pipe(gulp.dest(conf.paths.dist))
});


//把src下面的所有文件打包到dist文件夹下。
gulp.task('other', function () {
    var fileFilter = $.filter(function (file) {
        return file.stat.isFile();
    });

    return gulp.src([
        path.join(conf.paths.src, '/**/*'),
        path.join('!' + conf.paths.src, '/**/*.{html,css,js,scss}')
    ])
        .pipe(fileFilter)
        .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});

gulp.task('build',['html','other']);