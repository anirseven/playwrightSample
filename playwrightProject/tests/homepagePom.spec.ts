import {test, expect} from '@playwright/test';
import {HomePage} from './pages/homePage'

test('Validate page title',async({page})=>{
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveTitle(/Online Shopping/);
})

test('Validate search bar', async({page})=>{
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.searchProduct();
});

test('Validate left navigation menu', async({page})=>{
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.openLeftMenu();
});

test('Validate top Menu', async({page})=>{
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.topMenu();
});