/*jshint node:true, es3:false*/

var gulp = require('gulp'),
  config = require('../config'),
  karmaCommonConf = require('../../karma.common.conf.js'),
  karma = require('karma').server,
  webserver = require('gulp-webserver'),
  _ = require('lodash');

/**
 * Testing sub tasks
 */

gulp.task('tdd', function (done) {
  karma.start(_.assign({}, karmaCommonConf), done);
});

gulp.task('test', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {
    singleRun: true,
    reporters: ['dots', 'junit'],
    junitReporter: {
      outputFile: 'test-results.xml'
    }
  }), done);
});

gulp.task('tdd:debug', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {
    browsers: ['Chrome']
  }), done);
});

gulp.task('coverage:generate', function (done) {
  karma.start(_.assign({}, karmaCommonConf, {
    singleRun: true,
    reporters: ['progress','coverage'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'src/**/!(spec|*-spec|*-mock|mock|mock-data|*-mock-data).js': 'coverage'
    }
  }), done);

});

gulp.task('coverage', ['coverage:generate'], function () {

  return gulp.src('coverage')
    .pipe(webserver({
      host: config.servers.coverage.HOST,
      port: config.servers.coverage.PORT,
      fallback: 'index.html',
      open: true
    }));
});
