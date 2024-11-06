const { test, expect } = require('@playwright/test');

test('Teste dos alertas javascript', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', dialog => dialog.accept());
  await page.click('button:text("Click for JS Alert")');
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

  page.once('dialog', dialog => dialog.accept());
  await page.click('button:text("Click for JS Confirm")');
  await expect(page.locator('#result')).toHaveText('You clicked: Ok');

  page.once('dialog', dialog => dialog.dismiss());
  await page.click('button:text("Click for JS Confirm")');
  await expect(page.locator('#result')).toHaveText('You clicked: Cancel');

  page.once('dialog', dialog => {
    dialog.accept('Playwright');
  });
  await page.click('button:text("Click for JS Prompt")');
  await expect(page.locator('#result')).toHaveText('You entered: Playwright');
});
