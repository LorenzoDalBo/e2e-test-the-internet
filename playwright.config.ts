// playwright.config.js
module.exports = {
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    use: {
      headless: true,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    },
  };
  