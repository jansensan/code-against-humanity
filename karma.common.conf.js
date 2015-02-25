var config = require('./lib/config');

module.exports = {
  basePath: '',

  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['jasmine'],

  // list of files / patterns to load in the browser
  files: config.filesets.testSource,


  // list of files to exclude
  exclude: [

  ],

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['progress'],

  coverageReporter: {
    dir: 'coverage',
    subdir: '.'
  },

  // web server port
  port: config.servers.test.PORT,


  // enable / disable colors in the output (reporters and logs)
  colors: true,


  // level of logging
  // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
  logLevel: 'WARN',

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: false,

  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['PhantomJS'],
  plugins: [
    'karma-jasmine',
    'karma-phantomjs-launcher',
    'karma-chrome-launcher',
    'karma-junit-reporter',
    'karma-coverage'
  ]
}
