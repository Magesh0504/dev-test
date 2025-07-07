// Stream Snapshoot
// import { test, expect } from '@playwright/test';
// import path from 'path';
// import fs from 'fs';
// // const { test, expect } = require('@playwright/test');

// // Configuration
// const CONFIG = {
//     baseUrl: 'https://stream.acc.bright-river.com',
//     credentials: {
//         email: 'magesh.kumar@bright-river.com',
//         password: 'PLDXEZAS'
//     },
//     timeouts: {
//         navigation: 30000,
//         element: 10000,
//         upload: 80000
//     },
//     screenshots: {
//         directory: 'screenshots',
//         prefix: 'automation_'
//     }
// };

// // Logger utility
// const Logger = {
//     info: (message) => console.log(`[INFO] ${new Date().toISOString()} - ${message}`),
//     error: (message, error) => console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error),
//     debug: (message) => console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`)
// };

// // Screenshot utility
// const ScreenshotManager = {
//     async capture(page, stepName) {
//         try {
//             const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
//             const filename = `${CONFIG.screenshots.prefix}${stepName}_${timestamp}.png`;
//             const filepath = path.join(CONFIG.screenshots.directory, filename);
            
//             // Ensure screenshots directory exists
//             if (!fs.existsSync(CONFIG.screenshots.directory)) {
//                 fs.mkdirSync(CONFIG.screenshots.directory);
//             }
            
//             await page.screenshot({ path: filepath, fullPage: true });
//             Logger.debug(`Screenshot captured: ${filename}`);
//             return filepath;
//         } catch (error) {
//             Logger.error('Failed to capture screenshot', error);
//             return null;
//         }
//     }
// };

// test.describe('Stream Automation Tests', () => {
//     test('should complete full order flow', async ({ page }) => {
//         // Navigate to application
//         Logger.info('Navigating to application...');
//         await page.goto(CONFIG.baseUrl, { 
//             waitUntil: 'networkidle',
//             timeout: CONFIG.timeouts.navigation 
//         });
//         await ScreenshotManager.capture(page, 'initial_page');

//         // Handle cookie consent
//         Logger.info('Handling cookie consent...');
//         await page.waitForSelector('button:has-text("Accept")', { 
//             timeout: CONFIG.timeouts.element 
//         });
//         await page.getByRole('button', { name: 'Accept' }).click();
//         await ScreenshotManager.capture(page, 'cookie_accept');

//         // Login
//         Logger.info('Performing login...');
//         await page.waitForSelector('input[type="email"]', { 
//             timeout: CONFIG.timeouts.element 
//         });
        
//         await page.getByRole('textbox', { name: 'your_email@address.com' })
//             .fill(CONFIG.credentials.email);
        
//         await page.getByRole('textbox', { name: 'Password' })
//             .fill(CONFIG.credentials.password);
        
//         await ScreenshotManager.capture(page, 'login_form_filled');
        
//         await page.getByRole('button', { name: 'Continue' }).click();
//         await ScreenshotManager.capture(page, 'after_login');

//         // Create new order
//         Logger.info('Creating new order...');
//         await page.goto(`${CONFIG.baseUrl}/all`);
//         await ScreenshotManager.capture(page, 'orders_page');

//         await page.waitForSelector('button:has-text("Create new order")', { 
//             timeout: CONFIG.timeouts.upload 
//         });
//         await page.getByRole('button', { name: 'Create new order' }).click();
//         await ScreenshotManager.capture(page, 'create_order_clicked');

//         // Upload file
//         Logger.info('Uploading file...');
//         await page.waitForSelector('text=Click');
//         await page.setInputFiles('input[type="file"]', 'Uploadfiles/Test File 1.jpg');
//         await page.waitForTimeout(10000);
//         await ScreenshotManager.capture(page, 'after_file_upload');

//         // Fill order details
//         Logger.info('Filling order details...');
//         await page.getByRole('textbox', { name: 'Fill in a Name for your Order' })
//             .fill('BT QA TESTING');
//         await ScreenshotManager.capture(page, 'order_name_filled');

//         await page.locator('div[role="combobox"]', { hasText: 'Custom instructions' }).click();
//         await page.waitForSelector('div[role="listbox"] >> text=amazon');
//         await page.click('div[role="listbox"] >> text=amazon');
//         await ScreenshotManager.capture(page, 'custom_instructions_selected');

//         // Request quote
//         Logger.info('Requesting quote...');
//         await page.waitForTimeout(10000);
//         await page.getByRole('button', { name: 'Request quote' }).click();
//         await ScreenshotManager.capture(page, 'quote_requested');

//         Logger.info('Test completed successfully');
//     });
// });


//Stream login

import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

// Configuration
const CONFIG = {
    baseUrl: 'https://stream.acc.bright-river.com',
    credentials: {
        email: 'magesh.kumar@bright-river.com',
        password: 'PL5654DXEZAS'
    },
    timeouts: {
        navigation: 30000,
        element: 10000,
        upload: 80000
    },
    screenshots: {
        directory: 'screenshots',
        prefix: 'automation_'
    }
};

// Logger utility
const Logger = {
    info: (message) => console.log(`[INFO] ${new Date().toISOString()} - ${message}`),
    error: (message, error) => console.error(`[ERROR] ${new Date().toISOString()} - ${message}`, error),
    debug: (message) => console.debug(`[DEBUG] ${new Date().toISOString()} - ${message}`)
};

// Screenshot utility
const ScreenshotManager = {
    async capture(page, stepName) {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filename = `${CONFIG.screenshots.prefix}${stepName}_${timestamp}.png`;
            const filepath = path.join(CONFIG.screenshots.directory, filename);
            
            // Ensure screenshots directory exists
            if (!fs.existsSync(CONFIG.screenshots.directory)) {
                fs.mkdirSync(CONFIG.screenshots.directory);
            }
            
            await page.screenshot({ path: filepath, fullPage: true });
            Logger.debug(`Screenshot captured: ${filename}`);
            return filepath;
        } catch (error) {
            Logger.error('Failed to capture screenshot', error);
            return null;
        }
    }
};

test.describe('Stream Application Tests', () => {
    test('should complete login flow successfully', async ({ page }) => {
        try {
            // Navigate to application
            Logger.info('Navigating to application...');
            await page.goto(CONFIG.baseUrl, { 
                waitUntil: 'networkidle',
                timeout: CONFIG.timeouts.navigation 
            });
            await ScreenshotManager.capture(page, 'initial_page');

            // Handle cookie consent
            Logger.info('Handling cookie consent...');
            await page.waitForSelector('button:has-text("Accept")', { 
                timeout: CONFIG.timeouts.element 
            });
            await page.getByRole('button', { name: 'Accept' }).click();
            await ScreenshotManager.capture(page, 'cookie_accept');

            // Login
            Logger.info('Performing login...');
            await page.waitForSelector('input[type="email"]', { 
                timeout: CONFIG.timeouts.element 
            });
            
            await page.getByRole('textbox', { name: 'your_email@address.com' })
                .fill(CONFIG.credentials.email);
            
            await page.getByRole('textbox', { name: 'Password' })
                .fill(CONFIG.credentials.password);
            
            await ScreenshotManager.capture(page, 'login_form_filled');
            
            await page.getByRole('button', { name: 'Continue' }).click();
            await ScreenshotManager.capture(page, 'after_login');

            // Verify successful login
            await expect(page).toHaveURL(/.*\/all/);
            Logger.info('Login successful');

        } catch (error) {
            Logger.error('Test failed', error);
            await ScreenshotManager.capture(page, 'error_state');
            throw error;
        }
    });
});
