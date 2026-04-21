import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Full-Time Contract' }).click();
  await page.locator('div:nth-child(6) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.locator('div:nth-child(7) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
  await page.getByRole('option', { name: 'Administration' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('Sidepanel').locator('div').filter({ hasText: 'AdminPIMLeaveTimeRecruitmentMy' }).click();
  await page.getByRole('columnheader', { name: 'Sub Unit' }).click();
  await page.locator('div').filter({ hasText: 'Employee ReviewsEmployee' }).nth(2).click();
});