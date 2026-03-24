const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();
});

After(async function () {
  await this.browser.close();
});