import { expect, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
