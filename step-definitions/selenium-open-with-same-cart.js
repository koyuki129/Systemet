let { $, sleep } = require('./funcs.js');

module.exports = function () {

  this.When(/^I go to a new site$/, async function () {
   await driver.get("http://www.google.com");
  });
  
  this.When(/^I go back to my web page$/, async function () {
    await driver.get('http://localhost:3000');
    await sleep(500);
  });

  this.Then(/^I should be able to open the same cart as before it closed and reopened the browser$/, async function () {
    let cartItems = await $('.cart-items td:first-child');
    assert((await cartItems.getText()).includes(this.addedProduct1), "The product is not Auld Rare Benriach");
  });

}
