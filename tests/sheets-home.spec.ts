import { expect, Locator, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Sheets Home", () => {
  test("should have title", async ({ page }) => {
    // Then
    await expect(page).toHaveTitle("Sheets");
  });

  test("should have menu bar visible", async ({ page }) => {
    // Given
    const menuBar: Locator = page.locator("#menu-bar");

    // Then
    await expect(menuBar).toBeVisible();
  });
  test("should have sheets navigator visible", async ({ page }) => {
    // Given
    const sheetsNavigator: Locator = page.locator("#sheets-navigator");

    // Then
    await expect(sheetsNavigator).toBeVisible();
  });
});
