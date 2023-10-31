import { expect, type Locator, type Page } from '@playwright/test';

export class SapFioneerMainPage {
    readonly page:Page;
    readonly bankingBookmark: Locator;
    readonly insuranceBookmark: Locator;
    readonly financeAndEsgBookmark: Locator;
    readonly servicesBookmark: Locator;
    readonly partnersBookamrk: Locator;
    readonly companyBookmark: Locator;
    readonly resourcesBookmark: Locator;

    constructor(page: Page) {
        this.page = page;
        this.bankingBookmark = page.locator('header', { hasText: 'Banking' });
        this.insuranceBookmark = page.locator('header', { hasText: 'Insurance' });
        this.financeAndEsgBookmark = page.locator('header', { hasText: 'Finance & ESG' });
        this.servicesBookmark = page.locator('header', { hasText: 'Services' });
        this.partnersBookamrk = page.locator('header', { hasText: 'Partners' });
        this.companyBookmark = page.locator('header', { hasText: 'Company' });
        this.resourcesBookmark = page.locator('header', { hasText: 'Resources' });
    }

    async goto() {
        await this.page.goto('https://www.sapfioneer.com/');
      }
}