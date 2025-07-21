import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Online Shopping/);
});


test('search bar', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  
  await expect(page.getByRole('searchbox', { name: 'Search Amazon.in' })).toBeVisible();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('iphone 16');
  await page.getByRole('button', { name: 'Go', exact: true }).click();


  await expect(page.getByText('"iphone 16"', { exact: true })).toBeVisible();

  await expect(page.getByText('Sort by:Featured')).toBeVisible();
});

test('left navigation menu', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  
  await page.getByRole('link', { name: 'Amazon.in' }).click();
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await expect(page.getByRole('heading', { name: 'Trending' })).toBeVisible();
  await page.getByRole('heading', { name: 'Shop by Category' }).click();
  await page.getByRole('link', { name: 'Your Account' }).click();
});

test('top menu', async ({ page }) => {
  await page.goto('https://www.amazon.in/');

  // Expect a title "to contain" a substring.
  
  
  await expect(page.getByRole('link', { name: 'Amazon.in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Choose a language for shopping in Amazon India. The current selection is' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Returns & Orders' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'items in cart' })).toBeVisible();
});