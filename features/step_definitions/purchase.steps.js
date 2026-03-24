const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/login.page');
const ProductsPage = require('../../pages/products.page');
const CartPage = require('../../pages/cart.page');
const CheckoutPage = require('../../pages/checkout.page');

Given('que inicio sesión como {string}', async function (user) {
  const login = new LoginPage(this.page);
  await login.navigate();
  await login.login(user, 'secret_sauce');
});

Given('estoy en la página de productos', async function () {
  this.products = new ProductsPage(this.page);
});

When('agrego el producto {string} al carrito', async function (product) {
  await this.products.addProduct(product);
});

When('voy al carrito', async function () {
  await this.products.goToCart();
  this.cart = new CartPage(this.page);
});

When('procedo al checkout con nombre {string}, apellido {string}, código {string}', async function (n, a, c) {
  this.checkout = new CheckoutPage(this.page);
  await this.cart.checkout();
  await this.checkout.fillForm(n, a, c);
});

When('confirmo la orden', async function () {
  await this.checkout.finish();
});

Then('debería ver el mensaje {string}', async function (msg) {
  const locator = this.checkout.getSuccessMessage();
  await locator.waitFor({ state: 'visible' });

  const text = await locator.innerText();

  if (text.trim() !== msg.trim()) {
    throw new Error(`Mensaje incorrecto. Esperado: ${msg} - Obtenido: ${text}`);
  }
});