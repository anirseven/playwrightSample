import {expect, type Locator, type Page} from '@playwright/test'

export class HomePage {

    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly searchedText: Locator;
    readonly searchedSort : Locator;

    readonly openCategory: Locator;
    readonly trending : Locator;
    readonly shopByCategory: Locator;
    readonly yourAccount: Locator;

    readonly language: Locator;
    readonly return: Locator;
    readonly cart: Locator;

    constructor(page: Page){
        this.page = page;
        this.searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' });
        this.searchButton = page.getByRole('button', { name: 'Go', exact: true });
        this.searchedText = page.getByText('"iphone 16"', { exact: true });
        this.searchedSort = page.getByText('Sort by:Featured');

        this.openCategory = page.getByRole('button', { name: 'Open All Categories Menu' });
        this.trending = page.getByRole('heading', { name: 'Trending' });
        this.shopByCategory = page.getByRole('heading', { name: 'Shop by Category' });
        this.yourAccount = page.getByRole('link', { name: 'Your Account' });

        this.language = page.getByRole('link', { name: 'Choose a language for shopping in Amazon India. The current selection is' })
        this.return = page.getByRole('link', { name: 'Returns & Orders' })
        this.cart = page.getByRole('link', { name: 'items in cart' })

    }

    async goto(){
        await this.page.goto('https://www.amazon.in/');
    }

    async searchProduct(){
        await expect(this.searchBox).toBeVisible();
        await this.searchBox.click();
        await this.searchBox.fill('iphone 16');
        await this.searchButton.click();

        await expect(this.searchedText).toBeVisible();
        await expect(this.searchedSort).toBeVisible();
    }

    async openLeftMenu(){
        await this.openCategory.click();
        await expect(this.trending).toBeVisible();
        await this.shopByCategory.click();
        await this.yourAccount.click();
    }

    async topMenu(){
        await expect(this.language).toBeVisible();
        await expect(this.return).toBeVisible();
        await expect(this.cart).toBeVisible();

    }
}