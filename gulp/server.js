// gulp-connect  建立本地服务器

var gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('server:dev', function () {
    $.connect.server({
        root: './dev/', //从哪个目录开启server
        port: 9003,
        livereload: false  //是否实时刷新浏览器
    });
});