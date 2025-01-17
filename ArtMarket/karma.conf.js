module.exports = function (config) {
    config.set({
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('karma-junit-reporter'), // Add JUnit Reporter plugin
        require('@angular-devkit/build-angular/plugins/karma'),
      ],
      reporters: ['progress', 'kjhtml', 'junit'], // Add 'junit' to the reporters array
      junitReporter: {
        outputDir: 'coverage/test-results', // Directory for saving the junit.xml file
        outputFile: 'junit.xml',            // Name of the output file
        useBrowserName: false,             // Optional: To not include the browser name in the file
      },
      coverageReporter: {
        dir: require('path').join(__dirname, './coverage'),
        reporters: [
          { type: 'html', subdir: 'html' },
          { type: 'lcov', subdir: '.' },
        ],
      },
      browsers: ['ChromeHeadless'],
      singleRun: true,
    });
  };
  