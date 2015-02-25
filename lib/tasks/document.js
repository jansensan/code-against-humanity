var gulp = require('gulp'),
  config = require('../config.js'),
  webserver = require('gulp-webserver'),
  plumber = require('gulp-plumber'),
  ngdocs = require('gulp-ngdocs'),
  del = require('del');

gulp.task('clean:docs', function () {
  del.sync(config.paths.docs);
});

gulp.task('ngdocs', ['clean:docs'], function () {
  return gulp.src(config.filesets.jsFiles)
    .pipe(plumber())
    .pipe(ngdocs.process({
      scripts: [],
      html5Mode: true,
      startPage: '/api',
      titleLink: '/api',
      title: 'ngUseless Docs'
    }))
    .pipe(gulp.dest(config.paths.docs));
});

gulp.task('serve:docs', ['ngdocs'], function () {

  return gulp.src('docs')
    .pipe(webserver({
      livereload: true,
      host: config.servers.docs.HOST,
      port: config.servers.docs.PORT,
      fallback: 'index.html',
      open: true
    }));
});

gulp.task('watch:docs', function () {
  gulp.watch(config.filesets.jsFiles, ['ngdocs']);
});

gulp.task('docs', ['serve:docs', 'watch:docs']);
