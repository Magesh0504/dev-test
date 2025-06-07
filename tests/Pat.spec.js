import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pat.acc.bright-river.com/pat/pages/Login.aspx?ReturnUrl=%2fpat');
  await page.locator('#Username').click();
  await page.locator('#Username').fill('root');
  await page.locator('#Password').click();
  await page.locator('#Password').fill('p80$root');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Bright River', exact: true }).click();
  await page.getByRole('link', { name: 'Jobs', exact: true }).click();
});



