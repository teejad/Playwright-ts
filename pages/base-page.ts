import { Locator, Page } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async getPageURL() {
    return await this.page.url();
  }

  async click(locator: Locator) {
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);
  }

  async selectOption(locator: Locator, value: string) {
    await locator.selectOption(value);
  }
}
