import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Sheets Home", () => {
  test("should have title", async ({ page }) => {
    // Then
    await expect(page).toHaveTitle("Sheets");
  });
});
