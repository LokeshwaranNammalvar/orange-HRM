
// Import environment variables
require('dotenv').config();

// Import Playwright configuration utilities
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({

  // Test specifications location
  testDir: './tests',

  // Execute independent test files in parallel
  fullyParallel: true,

  // Prevent test.only in CI execution
  forbidOnly: !!process.env.CI,

  // Retry failed tests on CI
  retries: process.env.CI ? 2 : 0,

  // Worker configuration
  workers: process.env.CI ? 1 : undefined,

  // Test execution timeout
  timeout: 30000,

  // Assertion timeout
  expect: {
    timeout: 10000
  },

  // Reporting configuration
  reporter: [
    [
      'html',
      {
        outputFolder: 'playwright-report',
        open: 'never'
      }
    ],
    [
      'allure-playwright',
      {
        resultsDir: 'allure-results'
      }
    ]
  ],

  // Shared browser configuration
  use: {
    headless : false, 

    // OrangeHRM application URL
    baseURL: process.env.BASE_URL ||
      'https://opensource-demo.orangehrmlive.com',

    // Capture screenshot when test fails
    screenshot: 'only-on-failure',

    // Record video for failed tests
    video: 'retain-on-failure',

    // Capture trace on first retry
    trace: 'on-first-retry',

    // Browser execution settings
    headless: true,

    // Default action timeout
    actionTimeout: 15000,

    // Navigation timeout
    navigationTimeout: 30000
  },

  // Browser projects
  projects: [

    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari']
      }
    }

  ]

});
