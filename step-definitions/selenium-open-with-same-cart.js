let { $, sleep } = require('./funcs.js');
let chrome = require('selenium-webdriver/chrome');

module.exports = function () {


  this.When(/^I refresh the browser$/, async function () {
    await driver.navigate().refresh();
  });

  this.Then(/^I should be able to open the same cart with the selected products$/, async function () {
    let firstProduct = await $('.cart-items td:first-child');
    assert.notEqual(firstProduct, null, 'Could not find any product in the cart');
    let firstProductText = await firstProduct.getText();
    assert.equal(firstProductText, this.addedProduct1, 'Could not find added product');
  });

}
