let { $, sleep } = require('./funcs.js');
module.exports = function () {


  this.Given(/^that I am on the web page localhost:(\d+)$/, async function (portNumber) {
    // not sure how to detect when we fail to load the page?
    await helpers.loadPage('http://localhost:' + portNumber);
    // here we are waiting for the products to load
    // (when that is done the class hidden is removed from the body)
    while (true) {
      let hiddenBody = await $('body.hidden');
      // console.log("hiddenBody", typeof hiddenBody)
      if (hiddenBody === null) { break; }
      await sleep(100);
    }
    return true;
  });


  this.Given(/^that there is one products in the cart$/, async function () {

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

  this.When(/^I press remove button$/, async function () {

    let removeButton = await $('.cart-items .remove');
    assert.notEqual(removeButton, null, 'Could not find the remove button');

    // this part is needed for other tests
    // If there are multiple removeButtons
    // select the first one
    if (removeButton.length) {
    removeButton = removeButton[0];
    }

    await removeButton.click();

  });

  this.Then(/^the cart should not contain any products anymore$/, async function () {

    let cartItems = await $('.cart-items td');
    assert(cartItems == null, "Det finns tydligen något kvar")

  });

  this.Given(/^that there is two units of the same product in the cart$/, async function () {
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
    await add.click()

  });

  this.Given(/^that there is two different products in the cart$/, async function () {

    let searchBar = await $('.search #search');
    assert.notEqual(searchBar, null, 'Could not find the searchbar');
    await searchBar.sendKeys("Öl");

    let searchButton = await $('.searchbutton');
    assert.notEqual(searchButton, null, 'Could not find the search button');
    await searchButton.click();

    let add = await $('.search-page .add');
    assert.notEqual(add, null, 'Could not find the add button');
    if (Array.isArray(add) === true){
      add = add[0];
    }
    
    await add.click();
    await searchBar.clear();
    await searchBar.sendKeys("gin");
    // assert(searchBar.getText() === 'gin', "The text is not Gin")
    await searchButton.click();

    add = await $('.search-page .add');
    assert.notEqual(add, null, 'Could not find the add button');
    if (Array.isArray(add) === true){
      add = add[0];
    }

    await add.click();

  });

  this.When(/^I press remove button for the two different products in the cart$/, async function () {

    let removeButton = await $('.cart-items .remove');
    assert.notEqual(removeButton, null, 'Could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }

    await removeButton.click();
    removeButton = await $('.cart-items .remove');
    assert.notEqual(removeButton, null, 'Could not find the remove button');

    if (removeButton.length) {
      removeButton = removeButton[0];
    }
    await removeButton.click();

  });

  this.When(/^I press remove button for one of the two different products$/, async function () {


  });
}