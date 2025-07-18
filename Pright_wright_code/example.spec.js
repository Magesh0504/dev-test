// @ts-check
import { test, expect } from '@playwright/test';
const { chromium } = require('playwright'); 

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({  }) => {
   const browser = await chromium.launch({ headless: false }); // headless: false opens a visible browser
const context = await browser.newContext();
  const page = await context.newPage();
await page.goto('https://playwright.dev/');

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
