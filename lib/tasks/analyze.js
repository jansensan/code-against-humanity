var config = require('../config'),
  args = require('yargs').argv,
  _ = require('lodash'),
  utils = require('../utils'),
  webserver = require('gulp-webserver'),
  glob = require('glob'),
  gulp = require('gulp'),
  plato = require('plato');

/**
 * Create a visualizer report
 */
gulp.task('plato:generate', function(done) {
  utils.log('Analyzing source with Plato');
  utils.log('Browse to /report/plato/index.html to see Plato results');

  startPlatoVisualizer(done);
});

gulp.task('plato', ['plato:generate'], function () {

  return gulp.src('plato')
    .pipe(webserver({
      host: config.servers.plato.HOST,
      port: config.servers.plato.PORT,
      fallback: 'index.html',
      open: true
    }));
});

/**
 * Start Plato inspector and visualizer
 */
function startPlatoVisualizer(done) {
  utils.log('Running Plato');

  var files = glob.sync('src/*.js');
  var excludeFiles = '';
  var jsHintRc = JSON.parse(require('fs').readFileSync(require.resolve('../../.jshintrc'), 'utf8'));
  var options = {
    title: 'ngUseless Inspections Report',
    exclude: excludeFiles,
    jshint: {
      options: _.omit(jsHintRc, 'globals'),
      globals: jsHintRc.globals
    }
  };
  var outputDir = config.paths.plato;

  plato.inspect(files, outputDir, options, platoCompleted);

  function platoCompleted(report) {
    var overview = plato.getOverviewReport(report);
    if (args.verbose) {
      utils.log(overview.summary);
    }
    if (done) { done(); }
  }
}
