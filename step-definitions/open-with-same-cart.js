
let { $ } = require('./funcs.js');

module.exports = function () {

  let browser;
  let cart;
  

  this.Given(/^that there is at least one products in the cart$/, async function () {
    
    let searchBox = await $('.search #search');
    await searchBox.sendKeys('cava')
    let searchButtom = await $('.searchbutton');
    await searButtom.click();
    let add = await $('.add');
    if (add.length > 0) {
      add = add[0];
    }

    assert.notEqual(add, 1, 'Could not find the addbuttom');
    await add.click()
  });

  this.When(/^I close the browser$/, function () {
  });

  this.When(/^reopen the browser$/, function () {
    
  });

}
