const { test, expect } = require('@playwright/test');

test('Dynamic Controls - Adiciona e remove elementos', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  await page.click('button:text("Remove")');
  await expect(page.locator('#message')).toContainText("It's gone!");

  await page.click('button:text("Add")');
  await expect(page.locator('#message')).toContainText("It's back!");
});
