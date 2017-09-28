
var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    wrench = require('wrench');

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file);
});

//默认任务

gulp.task('dev',function (done) {
    runSequence(
        ['server:dev'],
        ['clean:dev'],
        ['usemin:dev'],
        ['watch'],
        ['webpack:dev'],
        done
    )
})