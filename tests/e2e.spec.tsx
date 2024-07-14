import { test, expect } from '@playwright/test';

test("should be falsy in overlay-list element's innerText after unmounting `OverlayProvider`", async ({
  page,
}) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'page1' }).click();
  await page.getByRole('button', { name: 'open modal' }).click();
  await page.getByRole('button', { name: 'close modal' }).click();
  await page.getByRole('link', { name: 'Page2' }).click();
  await page.getByRole('button', { name: 'open modal' }).click();
  await page.getByRole('button', { name: 'close modal' }).click();
  await page.getByRole('link', { name: 'Page3' }).click();
  await page.getByRole('button', { name: 'open modal' }).click();
  await page.getByRole('button', { name: 'close modal' }).click();
  await page.getByRole('link', { name: 'Page4' }).click();
  await page.getByRole('button', { name: 'open modal' }).click();
  await page.getByRole('button', { name: 'close modal' }).click();
  await page.getByRole('link', { name: 'Page5' }).click();
  await page.getByRole('button', { name: 'open modal' }).click();
  await page.getByRole('button', { name: 'close modal' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Outside OverlayProvider' }).click();
  await page.getByRole('link', { name: 'Home' }).click();

  await expect(await page.getByTestId('overlay-list').innerText()).toBeFalsy();
});
