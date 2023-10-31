import { type Page } from '@playwright/test';

export class FinancialControlPage {
    readonly page: Page;
    readonly url: string;

    constructor(page: Page) {
        this.page = page;
        this.url = '/finance-esg/financial-control/';
    }
}
