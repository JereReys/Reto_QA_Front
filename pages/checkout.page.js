class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.successHeader = page.locator('.complete-header');
  }

  async fillForm(name, last, zip) {
    await this.page.locator('#first-name').fill(name);
    await this.page.locator('#last-name').fill(last);
    await this.page.locator('#postal-code').fill(zip);
    await this.page.locator('#continue').click();
  }

  async finish() {
    await this.page.locator('#finish').click();
  }

  getSuccessMessage() {
    return this.successHeader;
  }
}

module.exports = CheckoutPage;