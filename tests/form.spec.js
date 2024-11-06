const { test, expect } = require('@playwright/test');

test('Envio de formulario', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/forgot_password');
  await page.fill('#email', 'test@example.com');
  await page.click('#form_submit');

  await expect(page.locator('h1')).toContainText('Internal Server Error');
});
