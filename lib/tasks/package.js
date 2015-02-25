var gulp = require('gulp'),
  config = require('../config.js'),
  ngAnnotate = require('gulp-ng-annotate'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify');


gulp.task('build:js', function () {
  return gulp.src(config.filesets.jsFiles)
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(sourcemaps.init())
    .pipe(concat(config.pkgName.concat('.js')))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.release))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(rename(config.pkgName.concat('.min.js')))
    .pipe(gulp.dest(config.paths.release));
});
