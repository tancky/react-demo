
// 监听文件自动编译

var gulp = require('gulp');
//服务器
gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['usemin:dev']);
});