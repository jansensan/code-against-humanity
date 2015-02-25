var gulp = require('gulp'),
  config = require('../config.js'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');


gulp.task('lint', function () {
  gulp.src(config.filesets.jsFiles)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});
