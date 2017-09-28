

let webpackStream = require('webpack-stream'),
    webpack = require('webpack'),
    gulp = require('gulp'),
    $ = require('gulp-load-plugins')();

gulp.task('webpack:dev', () => {
     return gulp.src('./src/index.js')
         .pipe(webpackStream(require('./webpack.config.dev.js'), webpack))
         .pipe(gulp.dest('./dev'));
});