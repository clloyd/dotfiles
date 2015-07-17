// Karma configuration
// Generated on Mon Feb 23 2015 14:39:02 GMT+0000 (GMT)

var karmaConf = {
  // --------------------------------------------------------------------------
  // base path that will be used to resolve all patterns (eg. files, exclude)
  basePath: '../',

  // list of files / patterns to load in the browser
  files: ['js/apps/*.js', 'js/**/__spec/*.spec.js'],

  // preprocess matching files before serving them to the browser
  // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
  preprocessors: {'js/**/*.js': ['webpack']},

  webpack: require('./webpack.test.config.js'),

  // STANDARD
  // --------------------------------------------------------------------------
  // frameworks to use
  // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
  frameworks: ['jasmine', 'jasmine-matchers', 'phantomjs-shim'],

  webpackMiddleware: {
    noInfo: true
  },

  // test results reporter to use
  // possible values: 'dots', 'progress'
  // available reporters: https://npmjs.org/browse/keyword/karma-reporter
  reporters: ['mocha', 'coverage'],

  coverageReporter: {
    type:   'lcov',
    dir:    'coverage/',
    subdir: 'Phantom'
  },

  // web server port
  port: 9876,

  // enable / disable colors in the output (reporters and logs)
  colors: true,

  // enable / disable watching file and executing tests whenever any file changes
  autoWatch: false,

  // start these browsers
  // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
  browsers: ['PhantomJS'],

  // Continuous Integration mode
  // if true, Karma captures browsers, runs the tests and exits
  singleRun: true,

  browserNoActivityTimeout: 60000
};

module.exports = function(config) {
  config.set(karmaConf);
};
