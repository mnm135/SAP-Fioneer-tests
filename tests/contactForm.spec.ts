import { test, expect } from '@playwright/test';
import { SapFioneerMainPage } from '../pages/main.page';
import { GetInTouchPage } from '../pages/getInTouch.page';

test('Empty form should show all error messages', async ({ page }) => {
    const mainPage = new SapFioneerMainPage(page);
    const getInTouchPage = new GetInTouchPage(page);
    await mainPage.goto();
    await mainPage.getInTouchButton.click();
    await getInTouchPage.submitButton.click();

   await expect(getInTouchPage.firstNameErrorMessage).toBeVisible();
   await expect(getInTouchPage.lastNameErrorMessage).toBeVisible();
   await expect(getInTouchPage.emailErrorMessage).toBeVisible();
   await expect(getInTouchPage.countryErrorMessage).toBeVisible();
   await expect(getInTouchPage.howCanWeHelpErrorMessage).toBeVisible();
   await expect(getInTouchPage.updatesBoxErrorMessage).toBeVisible();
   await expect(getInTouchPage.generalErrorMessage).toBeVisible();
  });