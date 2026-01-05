const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');

test('OrangeHRM Login', async ({ page }) => {
  await page.goto('/');
  const login = new LoginPage(page);
  await login.login('Admin', 'admin123');
  await expect(page).toHaveURL(/dashboard/);
});