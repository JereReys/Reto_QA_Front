class ProductsPage {
  constructor(page) {
    this.page = page;
  }

   async addProduct(product) {
  await this.page
    .locator(`xpath=//div[text()='${product}']/ancestor::div[@class='inventory_item']//button`)
    .click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}

module.exports = ProductsPage;