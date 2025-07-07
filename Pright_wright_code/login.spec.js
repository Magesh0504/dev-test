// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://pat.acc.bright-river.com/pat/pages/Login.aspx?ReturnUrl=%2fpat');
//   await page.locator('#Username').click();
//   await page.locator('#Username').fill('root');
//   await page.locator('#Password').click();
//   await page.locator('#Password').fill('p80$root');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'Bright River', exact: true }).click();
//   await page.getByRole('link', { name: 'Jobs', exact: true }).click();
// });


// //import { test, expect, chromium } from '@playwright/test';
// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch({ headless: false });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto('https://stream.acc.bright-river.com/Login?returnUrl=%2F');
//    });

  const playwright = require('playwright');

(async () => {
  let browser;
  try {
    console.log('Launching browser...');
    browser = await playwright.firefox.launch({
      headless: false,
      slowMo: 100, // Increased slow motion for better stability
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    console.log('Navigating to application...');
    await page.goto('https://stream.acc.bright-river.com', { waitUntil: 'networkidle' });
    await page.waitForTimeout(10000);
    // await page.waitForSelector('.dz-default dz-message');
    // await page.locator('.dz-default dz-message').click();

    // await page.locator('#file-upload').click().setInputFiles('Uploloadfiles/Test File 1.jpg');
    // await page.waitForTimeout(10000);

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})();
