import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '8tthms',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
      reportFilename: "[status]_[datetime]-[name]-report",
      charts: true,
      embeddedScreenshots: true,
      timestamp: "longDate",
      reportPageTitle: "MC Automated Tests Report",
      reportDir: 'cypress/reports',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://magento.softwaretestingboard.com',
  },
})
