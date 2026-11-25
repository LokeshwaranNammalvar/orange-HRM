import {test} from '@playwright/test'

test('login', async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('//input[@name="username"]').fill('Admin');
  await page.locator('//input[@name="password"]').fill('admin123');
  await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();

  await page.context().storageState({
    path : 'auth/orangeHrm.json'
  });
})