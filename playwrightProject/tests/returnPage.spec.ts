import {test , expect} from '@playwright/test';

test('return page details',async({page})=>{
    await page.goto('https://www.amazon.in/');

    
    await page.getByRole('link', { name: 'Returns & Orders' }).click();
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
    await expect(page.getByText('Email or mobile phone number', { exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Create your Amazon account' })).toBeVisible();
    
})