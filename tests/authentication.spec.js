
const { test, expect } = require('@playwright/test');

test.describe('Autenticação de usuário', () => {
  test('Fazer login com credenciais validas', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
  });

  test('Login com credenciais não validas', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'invalidUser');
    await page.fill('#password', 'invalidPass');
    await page.click('button[type="submit"]');

    await expect(page.locator('#flash')).toContainText('Your username is invalid!');
  });
});
