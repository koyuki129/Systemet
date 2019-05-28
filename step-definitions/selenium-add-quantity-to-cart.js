let { $, sleep } = require('./funcs.js');
module.exports = function () {

  this.When(/^I add (\d+) units of the same products to the cart$/, async function (val) {

    let searchBox = await $('.search #search');
    await searchBox.sendKeys('Sommarovina');

    let searchButton = await $('.search .searchbutton');
    await searchButton.click();

    let changeQuantity = await $('.search-page .quantity');
    assert.notEqual(changeQuantity, null, 'Could not find the input box');

    if (changeQuantity.length > 0) {
      changeQuantity = changeQuantity[0];
    }
    driver.executeScript("$('.search-page .quantity').val('')")
    await changeQuantity.sendKeys(val);

    let add = await $('.search-page .add');
    if (add.length > 0) {
      add = add[0];
    }

    assert.notEqual(add, null, 'Could not find the addbutton');

    await add.click();

    let firstProduct = await $('.cart-items td:first-child');
    this.addedProduct1 = await firstProduct.getText();
  });

  this.Then(/^the products should be added to the cart$/, async function () {

    let cartItems = await $('.cart-items td:first-child');
    assert((await cartItems.getText()).includes(this.addedProduct1), "The product is not Sommarovina");
  });

  this.Then(/^the quantity of the products in the cart is (\d+)$/, async function (val) {
    let changeQuantity = await $('.cart-items .inputNumber');
    assert.equal(await changeQuantity.getAttribute('value'), val, "expected value was not " + val)
  });

  this.When(/^I add three units of the same products to the cart by adding them separately$/, async function () {

    let searchBox = await $('.search #search');
    await searchBox.sendKeys('Sommarovina');

    let searchButton = await $('.search .searchbutton');
    await searchButton.click();

    let add = await $('.search-page .add');
    if (add.length > 0) {
      add = add[0];
    }

    assert.notEqual(add, null, 'Could not find the addbutton');

    await add.click();
    await add.click();
    await add.click();

    let firstProduct = await $('.cart-items td:first-child');
    this.addedProduct1 = await firstProduct.getText();
  });

  this.Then(/^the quantity of the products in the cart is three$/, async function () {

    let changeQuantity = await $('.cart-items .inputNumber');
    assert(await changeQuantity.getAttribute('value') == "3", "expected value was not 3")
  });

  this.Then(/^the products should not be added to the cart$/, async function () {
    let cartItems = await $('.cart-items td:first-child');
    assert.notEqual(cartItems, null, 'Det finns tydligen något kvar');
    assert(Array.isArray(cartItems) == false, 'Det var tydligen en array');
    assert((await cartItems.getText()).includes(this.addedProduct1), "Det finns tydligen något kvar")
  });
}