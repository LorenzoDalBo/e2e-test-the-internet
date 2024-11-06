module.exports = {
    testDir: './tests',
    timeout: 30000,
    retries: 0,
    reporter: [['html', { outputFolder: 'playwright-report' }]],
    use: {
      headless: true,
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
    },
  };
  