import { type Locator, type Page } from '@playwright/test';

const iFrameLocator = '#hs-form-iframe-0';

export class GetInTouchPage {
    readonly page: Page;
    readonly submitButton: Locator;
    readonly firstNameErrorMessage: Locator;
    readonly lastNameErrorMessage: Locator;
    readonly emailErrorMessage: Locator;
    readonly countryErrorMessage: Locator;
    readonly howCanWeHelpErrorMessage: Locator;
    readonly updatesBoxErrorMessage: Locator;
    readonly generalErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        this.submitButton = page.frameLocator(iFrameLocator).locator('//input[@value="Submit"]');

        this.firstNameErrorMessage = page.frameLocator(iFrameLocator).locator('.hs-firstname .hs-error-msg');
        this.lastNameErrorMessage = page.frameLocator(iFrameLocator).locator('.hs-lastname .hs-error-msg');
        this.emailErrorMessage = page.frameLocator(iFrameLocator).locator('.hs-email .hs-error-msg');
        this.countryErrorMessage = page.frameLocator(iFrameLocator).locator('.hs-country__new_ .hs-error-msg');
        this.howCanWeHelpErrorMessage = page.frameLocator(iFrameLocator).locator('.hs-how_can_we_help_you_ .hs-error-msg');
        this.updatesBoxErrorMessage = page.frameLocator(iFrameLocator).locator('.hs-dependent-field .hs-error-msg');
        this.generalErrorMessage = page.frameLocator(iFrameLocator).locator('.hs_error_rollup');
    }
}
