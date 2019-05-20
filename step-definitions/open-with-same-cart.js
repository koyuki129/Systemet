
let { $ } = require('./funcs.js');

module.exports = function () {

  let browser;
  let cart;
  

  this.Given(/^that there is at least one products in the cart$/, async function () {
    
    let searchBar = await $('.search #search');
    let theButtom = await $('.search .searchbutton');
    await searchBar.sendKeys("Öl")
    await theButtom.click();
    let add = await $('.search-page .add');
    if (add.length > 0) {
      add = add[0];
    }

    assert.notEqual(add, null, 'Could not find the addbuttom');
    await add.click()
  });

  this.When(/^I close the browser$/, function () {
  });

  this.When(/^reopen the browser$/, function () {
    
  });

}
