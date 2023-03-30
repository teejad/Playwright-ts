import { test, expect } from "@playwright/test";

test("Navigate to search engine and search for Zoopla", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).fill("Zoopla");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page
    .getByRole("link", {
      name: "Zoopla > Search Property to Buy, Rent, House Prices, Estate ... Zoopla https://www.zoopla.co.uk",
    })
    .click();
  await page
    .frameLocator("#gdpr-consent-notice")
    .getByRole("button", { name: "Accept all cookies" })
    .click();
});
