var $ = require('gulp-load-plugins')({lazy: true});
var _ = require('lodash');
var mainBowerFiles = require('main-bower-files');

var rootPath = process.env.PWD = process.cwd();

module.exports = {
  log: log,
  getBowerFiles: getBowerFiles
};

/**
 * Log a message or series of messages using chalk's blue color.
 * Can pass in a string, object or array.
 */
function log(msg) {
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        $.util.log($.util.colors.blue(msg[item]));
      }
    }
  } else {
    $.util.log($.util.colors.blue(msg));
  }
}


function getBowerFiles() {
  return mainBowerFiles({includeDev: true});
}
