import { test, expect } from '@playwright/test';

test('Postman login test', async ({ page }) => {
  console.log('Navigating to Postman workspace...');
  await page.goto('https://web.postman.co/workspace/My-Workspace~e9fc533c-e7af-4123-877a-3b1e28354cfc/overview');

  await page.getByRole('textbox', { name: 'Email or username' }).click();
  await page.getByRole('textbox', { name: 'Email or username' }).fill('magesh.kumar@bright-river.com');
  await page.getByRole('textbox', { name: 'Email or username' }).press('Tab');

  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Maafi3Magesh@');

  await page.getByRole('button', { name: 'Sign In' }).click();

  // Optional: wait to see the result
  await page.waitForTimeout(5000);
});
