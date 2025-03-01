import { expect, Locator, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("Sheets Navigator", () => {
  test("should add new sheet tab", async ({ page }) => {
    // Given
    const addSheets: Locator = page.locator("#add-sheets");
    const newTabName = "Sheet2";

    // When
    await addSheets.click();

    // Then
    expect(await page.getByText(newTabName).isVisible()).toBeTruthy();
  });

  test("should change sheets container when sheet tabs are clicked", async ({
    page,
  }) => {
    // Given
    const addSheets: Locator = page.locator("#add-sheets");
    await addSheets.click();
    const sheet2Tab: Locator = page.locator("text=Sheet2");

    // When
    await sheet2Tab.click();

    // Then
    expect(await page.locator("#sheet2-container").isVisible()).toBeTruthy();
  });
});
