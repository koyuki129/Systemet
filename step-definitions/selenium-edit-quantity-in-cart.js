let { $, sleep } = require('./funcs.js');
module.exports = function () {



this.Given(/^that there is one products with one unit in the cart$/, async function () {
    let searchBar = await $('.search #search');
    assert.notEqual(searchBar, null, 'Could not find the searchbar');
    await searchBar.sendKeys("Öl")

    let searchButton = await $('.searchbutton');
    assert.notEqual(searchButton, null, 'Could not find the search button');
    await searchButton.click();

    let add = await $('.search-page .add');
    assert.notEqual(add, null, 'Could not find the add button');
    if (Array.isArray(add) === true){
      add = add[0];
    }
    
    await add.click()
  });


  this.When(/^I type in the quantity of the product to (\d+) units$/, async function () {
      
  });
}