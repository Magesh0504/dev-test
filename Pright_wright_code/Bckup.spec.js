// import { test, expect } from '@playwright/test';

// test('basic level stream job create', async ({ page }) => {
//   try {
//     console.log('Navigating to application...');
//     await page.goto('https://stream.acc.bright-river.com', { waitUntil: 'networkidle' });

//     // Accept
//     console.log('Handling cookie acceptance...');
//     await page.waitForSelector('button:has-text("Accept")', { timeout: 10000 });
//     await page.getByRole('button', { name: 'Accept' }).click();

//     // login and valid credentials
//     console.log('Filling login form...');
//     await page.waitForSelector('input[type="email"]', { timeout: 10000 });
//     await page.getByRole('textbox', { name: 'your_email@address.com' }).click();
//     await page.getByRole('textbox', { name: 'your_email@address.com' }).fill('magesh.kumar@bright-river.com');
//     await page.getByRole('textbox', { name: 'Password' }).click();
//     await page.getByRole('textbox', { name: 'Password' }).fill('PLDXEZAS');

//     //login button
//     console.log('Submitting login...');
//     await page.getByRole('button', { name: 'Continue' }).click();

//     // Navigate to orders page
//     console.log('Navigating to orders page...');
//     await page.goto('https://stream.acc.bright-river.com/all');
    
//     // Create Order
//     console.log('Creating new order...');
//     await page.waitForSelector('button:has-text("Create new order")', { timeout: 80000 });
//     await page.getByRole('button', { name: 'Create new order' }).click();
    
//     //Upload file
//     await page.waitForSelector('text=Click');
//     await page.setInputFiles('input[type="file"]', 'Uploloadfiles/Test File 1.jpg');
//     await page.waitForTimeout(10000);

//     //Fill order details
//     console.log('Filling order details...');
//     await page.getByRole('textbox', { name: 'Fill in a Name for your Order' }).click();
//     await page.getByRole('textbox', { name: 'Fill in a Name for your Order' }).fill('BT QA TESTING ');
//     await page.locator('div[role="combobox"]', { hasText: 'Custom instructions' }).click();
//     await page.waitForSelector('div[role="listbox"] >> text=amazon');
//     await page.click('div[role="listbox"] >> text=amazon');

//     await page.waitForTimeout(10000);
//     //Request quote button
//     await page.getByRole('button', { name: 'Request quote' }).click();

//     console.log('Test completed successfully!');
//     await page.waitForTimeout(5000);
//   } catch (error) {
//     console.error('An error occurred:', error);
//     await page.screenshot({ path: 'error-screenshot.png' });
//     console.log('Error screenshot saved as error-screenshot.png');
//     throw error;
//   }
// });

//medium level stream job create
// import { firefox, chromium } from 'playwright';


// (async () => {
//     let browser;
//     let page;
//     try {
//       console.log('Launching browser...');
//       browser = await chromium.launch({
//         headless: false,
//         slowMo: 100 // Increased slow motion for better stability
//       });
//       const context = await browser.newContext();
//       page = await context.newPage();
  
//       // Launch browser
//       console.log('Navigating to application...');
//       await page.goto('https://stream.acc.bright-river.com', { waitUntil: 'networkidle' });
//       await page.screenshot({ path: '1-initial-page.png' });
  
//       // Accept
//       console.log('Handling cookie acceptance...');
//       await page.waitForSelector('button:has-text("Accept")', { timeout: 10000 });
//       await page.getByRole('button', { name: 'Accept' }).click();
//       await page.screenshot({ path: '2-after-cookie-accept.png' });
  
//       // login and valid credentials
//       console.log('Filling login form...');
//       await page.waitForSelector('input[type="email"]', { timeout: 10000 });
//       await page.getByRole('textbox', { name: 'your_email@address.com' }).click();
//       await page.getByRole('textbox', { name: 'your_email@address.com' }).fill('magesh.kumar@bright-river.com');
//       await page.getByRole('textbox', { name: 'Password' }).click();
//       await page.getByRole('textbox', { name: 'Password' }).fill('PLDXEZAS');
//       await page.screenshot({ path: '3-login-form-filled.png' });
  
//       //login button
//       console.log('Submitting login...');
//       await page.getByRole('button', { name: 'Continue' }).click();
//       await page.screenshot({ path: '4-after-login.png' });
  
//       // Navigate to orders page
//       console.log('Navigating to orders page...');
//       await page.goto('https://stream.acc.bright-river.com/all');
//       await page.screenshot({ path: '5-orders-page.png' });
      
//       // Create Order
//       console.log('Creating new order...');
//       await page.waitForSelector('button:has-text("Create new order")', { timeout: 80000 });
//       await page.getByRole('button', { name: 'Create new order' }).click();
//       await page.screenshot({ path: '6-create-order-clicked.png' });
      
//       //Upload first file
//       await page.waitForSelector('text=Click');
//       await page.setInputFiles('input[type="file"]', 'Uploloadfiles/Test File 1.jpg');
//       await page.waitForTimeout(10000);
//       await page.screenshot({ path: '7-after-file-upload.png' });
  
//       //Fill order details
//       console.log('Filling order details...');
//       await page.getByRole('textbox', { name: 'Fill in a Name for your Order' }).click();
//       await page.getByRole('textbox', { name: 'Fill in a Name for your Order' }).fill('BT QA TESTING ');
//       await page.screenshot({ path: '8-order-name-filled.png' });
  
//       await page.locator('div[role="combobox"]', { hasText: 'Custom instructions' }).click();
//       await page.waitForSelector('div[role="listbox"] >> text=amazon');
//       await page.click('div[role="listbox"] >> text=amazon');
//       await page.screenshot({ path: '9-custom-instructions-selected.png' });
  
//       await page.waitForTimeout(10000);
//       //Request quote button
//       await page.getByRole('button', { name: 'Request quote' }).click();
//       await page.screenshot({ path: '10-quote-requested.png' });
  
//       console.log('Test completed successfully!');
//       // Add a delay before closing to ensure all operations are complete
//       await page.waitForTimeout(5000);
//     } catch (error) {
//       console.error('An error occurred:', error);
//       // Take screenshot on error
//       if (page) {
//         try {
//           await page.screenshot({ path: 'error-screenshot.png' });
//           console.log('Error screenshot saved as error-screenshot.png');
//         } catch (screenshotError) {
//           console.error('Failed to take error screenshot:', screenshotError);
//         }
//       }
//     } finally {
//       if (browser) {
//         try {
//           await browser.close();
//         } catch (closeError) {
//           console.error('Error closing browser:', closeError);
//         }
//       }
//     }
//   })();


//old but it will work for stream
// import { test, expect } from '@playwright/test';

// test('Stream application test', async ({ page }) => {
//   console.log('Navigating to application...');
//   await page.goto('https://stream.acc.bright-river.com', { waitUntil: 'networkidle' });
//   await page.screenshot({ path: '1-initial-page.png' });

//   // Accept
//   console.log('Handling cookie acceptance...');
//   await page.waitForSelector('button:has-text("Accept")', { timeout: 10000 });
//   await page.getByRole('button', { name: 'Accept' }).click();
//   await page.screenshot({ path: '2-after-cookie-accept.png' });

//   // login and valid credentials
//   console.log('Filling login form...');
//   await page.waitForSelector('input[type="email"]', { timeout: 10000 });
//   await page.getByRole('textbox', { name: 'your_email@address.com' }).click();
//   await page.getByRole('textbox', { name: 'your_email@address.com' }).fill('magesh.kumar@bright-river.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('PLDXEZAS');
//   await page.screenshot({ path: '3-login-form-filled.png' });

//   //login button
//   console.log('Submitting login...');
//   await page.getByRole('button', { name: 'Continue' }).click();
//   await page.screenshot({ path: '4-after-login.png' });

//   // Navigate to orders page
//   console.log('Navigating to orders page...');
//   await page.goto('https://stream.acc.bright-river.com/all');
//   await page.screenshot({ path: '5-orders-page.png' });
  
//   // Create Order
//   console.log('Creating new order...');
//   await page.waitForSelector('button:has-text("Create new order")', { timeout: 80000 });
//   await page.getByRole('button', { name: 'Create new order' }).click();
//   await page.screenshot({ path: '6-create-order-clicked.png' });
  
//   //Upload first file
//   await page.waitForSelector('text=Click');
//   await page.setInputFiles('input[type="file"]', 'Uploloadfiles/Test File 1.jpg');
//   await page.waitForTimeout(10000);
//   await page.screenshot({ path: '7-after-file-upload.png' });

//   //Fill order details
//   console.log('Filling order details...');
//   await page.getByRole('textbox', { name: 'Fill in a Name for your Order' }).click();
//   await page.getByRole('textbox', { name: 'Fill in a Name for your Order' }).fill('BT QA TESTING ');
//   await page.screenshot({ path: '8-order-name-filled.png' });

//   await page.locator('div[role="combobox"]', { hasText: 'Custom instructions' }).click();
//   await page.waitForSelector('div[role="listbox"] >> text=amazon');
//   await page.click('div[role="listbox"] >> text=amazon');
//   await page.screenshot({ path: '9-custom-instructions-selected.png' });

//   await page.waitForTimeout(10000);
//   //Request quote button
//   await page.getByRole('button', { name: 'Request quote' }).click();
//   await page.screenshot({ path: '10-quote-requested.png' });

//   console.log('Test completed successfully!');

// });