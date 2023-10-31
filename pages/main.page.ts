import { expect, type Locator, type Page } from '@playwright/test';

export class SapFioneerMainPage {
    readonly page: Page;
    readonly bankingBookmark: Locator;
    readonly insuranceBookmark: Locator;
    readonly financeAndEsgBookmark: Locator;
    readonly servicesBookmark: Locator;
    readonly partnersBookamrk: Locator;
    readonly companyBookmark: Locator;
    readonly resourcesBookmark: Locator;
    readonly financialControlLink: Locator;
    readonly getInTouchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.bankingBookmark = page.getByRole('listitem').filter({ hasText: 'Banking' });
        this.insuranceBookmark = page.getByRole('listitem').filter({ hasText: 'Insurance' });
        this.financeAndEsgBookmark = page.getByRole('listitem').filter({ hasText: 'Finance & ESG' });
        this.servicesBookmark = page.locator('.nav-top-link').filter({ hasText: 'Services' });
        this.partnersBookamrk = page.getByRole('listitem').filter({ hasText: 'Partners' });
        this.companyBookmark = page.getByRole('listitem').filter({ hasText: 'Company' });
        this.resourcesBookmark = page.getByRole('listitem').filter({ hasText: 'Resource' });
        this.financialControlLink = page.locator('//header//span[text()=" Financial Control "]/..');
        this.getInTouchButton = page.locator('#masthead').getByRole('link', { name: 'Get in touch' });
    }

    async goto() {
        await this.page.goto('https://www.sapfioneer.com/');
      }
}
