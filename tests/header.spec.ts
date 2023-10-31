import { test, expect } from '@playwright/test';
import { SapFioneerMainPage } from '../pages/main.page';
import { FinancialControlPage } from '../pages/financialControl.page';

test('Financial Control link should redirect to correct page', async ({ page }) => {
    const mainPage = new SapFioneerMainPage(page);
    const financialControlPage = new FinancialControlPage(page);
    await mainPage.goto();
    
    await mainPage.financeAndEsgBookmark.hover();
    await mainPage.financialControlLink.click();
    await expect(page).toHaveURL(financialControlPage.url);
  });

  test('All header items should be visible', async ({ page }) => {
    const mainPage = new SapFioneerMainPage(page);
    await mainPage.goto();

    await expect(mainPage.bankingBookmark).toBeVisible();
    await expect(mainPage.insuranceBookmark).toBeVisible();
    await expect(mainPage.financeAndEsgBookmark).toBeVisible();
    await expect(mainPage.servicesBookmark).toBeVisible();
    await expect(mainPage.partnersBookamrk).toBeVisible();
    await expect(mainPage.companyBookmark).toBeVisible();
    await expect(mainPage.resourcesBookmark).toBeVisible();
  });