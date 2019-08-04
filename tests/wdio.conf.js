
exports.config = {
  specs: ['./tests/features/**/*.feature'],
  services: ['chromedriver'],
  port: 9515, // default for ChromeDriver
  path: '/',
  maxInstances: 1,
  capabilities: [{
    browserName: 'chrome',
    'goog:chromeOptions': {
      // Network emulation requires device mode, which is only enabled when mobile emulation is on
      mobileEmulation: { deviceName: 'iPhone 8' },
    },
    // Allow control over the state of network connectivity for testing
    networkConnectionEnabled: true
  }],
  exclude: [],
  sync: true,
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'trace',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './reports/errorShots/',
  //
  // Set a base URL in order to shorten url command calls. If your url
  // parameter starts with "/", then the base url gets prepended.
  baseUrl: 'http://localhost:3000',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 30000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  framework: 'cucumber',
  reporters: ['spec',
    ['cucumberjs-json', {
      jsonFolder: './reports/json/',
    },
    ],
  ],
  // If you are using Cucumber you need to specify the location of your step
  // definitions.
  cucumberOpts: {
    requireModule: ['@babel/register'],
    require: [
      './tests/steps/search.js',
    ], // <string[]> (file/dir) require files before executing features
    backtrace: true, // <boolean> show full backtrace for errors
    failFast: false, // <boolean> abort the run on first failure\
    snippets: true, // <boolean> hide step definition snippets for pending steps
    source: true, // <boolean> hide source uris
    profile: [], // <string[]> (name) specify the profile to use
    strict: true, // <boolean> fail if there are any undefined or pending\
    // tagExpression: only execute the features or scenarios with tags matching the expression
    timeout: 300000, // <number> timeout for step definitions
    ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
  },
  before: function before() {
    // Setup the Chai assertion framework
    const chai = require('chai'); // eslint-disable-line

    global.expect = chai.expect;
    global.assert = chai.assert;
    global.should = chai.should();
  },
};
