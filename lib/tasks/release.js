var gulp = require('gulp'),
  config = require('../config.js'),
  tag = require('gulp-tag-version'),
  $ = require('gulp-load-plugins')({lazy: true});

gulp.task('patch', ['package'], function() { return release('patch'); });
gulp.task('minor', ['package'], function() { return release('minor'); });
gulp.task('major', ['package'], function() { return release('major'); });

function release(importance) {
  // get all the files to bump version in
  return gulp.src(config.packages)
    // bump the version number in those files
    .pipe($.bump({type: importance}))
    // save it back to filesystem
    .pipe(gulp.dest(config.paths.projectRoot))
    // commit the changed version number
    .pipe($.git.commit('bumps package version'))

    // read only one file to get the version number
    .pipe($.filter('package.json'))
    // **tag it in the repository**
    .pipe(tag({prefix: ''}));
}
