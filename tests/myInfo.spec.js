import {test} from '@playwright/test'

test.use({
    storageState: 'auth/orangehrm.json'
});

test('personal details', async({page})=>{
  await page.goto();
  await page.getByText('My Info').click();
  await page.getByPlaceholder('First Name').fill('Suriya');
  await page.getByPlaceholder('Middle Name').fill('Siva');
  await page.getByPlaceholder('Last Name').fill('Kumar');
  await page.locator("//label[text()='Employee Id']/parent::div/parent::div//input").fill(101);
  await page.locator("//label[text()='License Expiry Date']/parent::div/parent::div//input")

})