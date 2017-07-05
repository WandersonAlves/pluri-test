exports.config = {
    framework: 'jasmine',
    baseUrl: 'http://localhost:8080/',
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
        var failFast = require('jasmine-fail-fast');
        browser.driver.manage().window().maximize();
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(failFast.init());
    },
    jasmineNodeOpts: {
        print: function () {}
    }
};
