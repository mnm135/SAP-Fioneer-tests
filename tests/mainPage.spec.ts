import { test, expect } from '@playwright/test';
import { SapFioneerMainPage } from '../pages/main.page';

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