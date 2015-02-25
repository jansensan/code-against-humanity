var _ = require('lodash');
var utils = require('./utils');

var pkgName = require('../bower.json').name;
var packages = ['./package.json', './bower.json'];
var rootPath = process.env.PWD = process.cwd();
var jsSource = ['src/*.module.js', 'src/*.js', 'src/**/*.module.js', 'src/**/*.js'];
var jsSpec = ['test/*.js', 'test/**/*.js'];
var devBowerFiles = utils.getBowerFiles({includeDev: true});
var bowerFiles = utils.getBowerFiles();

var testSource = _.union(devBowerFiles, jsSource, jsSpec);
var docSource = bowerFiles.concat([
  'bower_components/angular/angular.min.js.map',
  'bower_components/angular-animate/angular-animate.min.js.map'
]);

var paths = {
  source: rootPath.concat('/src'),
  release: rootPath.concat('/release'),
  docs: rootPath.concat('/docs'),
  coverage: rootPath.concat('/coverage'),
  plato: rootPath.concat('/plato'),
  projectRoot:  rootPath
};

var filesets = {
  jsFiles: jsSource,
  specs: jsSpec,
  bowerFiles: bowerFiles,
  testSource: testSource,
  release: paths.release.concat('/*'),
  docs: paths.release.concat('/*')
};

var servers = {
  docs: {
    HOST: 'localhost',
    PORT: 9001
  },
  coverage: {
    HOST: 'localhost',
    PORT: 9002
  },
  plato: {
    HOST: 'localhost',
    PORT: 9003
  },
  test: {
    HOST: 'localhost',
    PORT: 9876
  }
};


module.exports = {
  pkgName: pkgName,
  packages: packages,
  paths: paths,
  filesets: filesets,
  servers: servers
}
