module.exports = function (config) {
  config.set({
    browsers: ['Firefox'],
    frameworks: ['mocha'],
    reporters: ['mocha', 'coverage'],
    preprocessors: { 'build/bundle.js': ['coverage'] },
    files: ['build/bundle.js'],
    coverageReporter: {
      reporters : [
        { 'type': 'text' },
        { 'type': 'lcov', dir: 'coverage' },
        { 'type': 'html', dir: 'coverage' }
      ]
    },
    port: 9876,
    colors: true,
    singleRun: true,
    logLevel: config.LOG_INFO
  });
};
