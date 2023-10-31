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