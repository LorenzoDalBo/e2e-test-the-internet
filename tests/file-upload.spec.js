const { test, expect } = require('@playwright/test');
const path = require('path');

test('Envio de arquivo', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  const filePath = path.resolve(__dirname, '../files/test-file.txt');
  await page.setInputFiles('#file-upload', filePath);
  await page.click('#file-submit');

  await expect(page.locator('#uploaded-files')).toHaveText('test-file.txt');
});
