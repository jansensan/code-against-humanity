var gulp = require('gulp'),
  del = require('del'),
  _ = require('lodash'),
  config = require('./lib/config.js'),
  requireDir = require('require-dir');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
requireDir('./lib/tasks', { recurse: true });

gulp.task('clean:release', function () {
  del.sync(config.paths.release);
});

gulp.task('package', ['clean:release', 'lint', 'test', 'build:js']);
