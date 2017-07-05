exports.config = {
    framework: 'jasmine',
    //allScriptsTimeout: 15000,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        chromeOnly: true,
        directConnect: true,
        chromeOptions: {
            args: ['no-sandbox',
                   '--start-maximized']
        },
        specs: ['test/e2e/**/*.spec.js']
    },
    onPrepare: function () {
        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
          spec: {
            displayStacktrace: true
          }
        }));
    },
    plugins: [{
      package: 'protractor-http-snitch',

      // Optional options
      level: {
        failure: 'debug'
      }
    }],
    jasmineNodeOpts: {
        print: function () {}
    }
};
