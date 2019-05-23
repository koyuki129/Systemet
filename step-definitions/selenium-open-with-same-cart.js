let { $, sleep } = require('./funcs.js');
let chrome = require('selenium-webdriver/chrome');

module.exports = function () {

  this.Given(/^that there is at least one products in the cart$/, async function () {
    assert.equal(this.addedProduct1, 'Auld Rare Benriach', 'Could not find the product');
  });

  this.When(/^I close the browser$/, async function () {
  });

  this.When(/^reopen the browser$/, async function () {
  });

  this.Then(/^I should be able to open the same cart with the selected products$/, async function () {
    let firstProduct = await $('.cart-items td:first-child');
    let firstProductText = await firstProduct.getText();
    assert.equal(firstProductText, 'Auld Rare Benriach', 'Could not find added product');
  });

}
