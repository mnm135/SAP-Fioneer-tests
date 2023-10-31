import { expect, type Locator, type Page } from '@playwright/test';

export class FinancialControlPage {
    readonly page: Page;
    readonly url: string;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://www.sapfioneer.com/finance-esg/financial-control/';
    }
}
