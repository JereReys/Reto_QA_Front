const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/login.page');

Given('que estoy en la página de login', async function () {
  this.login = new LoginPage(this.page);
  await this.login.navigate();
});

When('ingreso el usuario {string} y contraseña {string}', async function (user, pass) {
  await this.login.login(user, pass);
});

Then('debería ver la página de productos', async function () {
  await this.page.waitForSelector('.inventory_list');
});

Then('debería ver un mensaje de error', async function () {
  await this.login.errorMsg.isVisible();
});