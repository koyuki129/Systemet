let { $, sleep } = require('./funcs.js');
module.exports = function () {

 //Senario nr 1

//Given that I am on the web page localhost:3000

//And that the products are available in the store

//When I add 2 units of the same products to the cart

 this.When(/^I add (\d+) units of the same products to the cart$/, async function (units) {
  let searchBox = await $('.search #search');
  await searchBox.sendKeys('Cava');
  
  let searchButton = await $('.searchbutton')
  await searchButton.click();

  let addButton = await $('.add')
  await addButton.click();

  let a = await $('.a')
  await a.click;
 

  let button = await $('.button')
  await button.click();
 });

//Then the products should be added to the cart

this.Then(/^the products should be added to the cart$/, async function () {
  let search = await $('.search-page');
  assert.equal(search, [2], 'The product should not be added!');
});

//And the quantity of the products in the cart is 2 

this.Then(/^the quantity of the products in the cart is (\d+)$/, async function (quantity) {
  let esarch = await $('.search-page');
  let quantity = await cart.quantity('');
  assert.equal(quantity, '2', 'The quantity of the product is null!');
}); 

// Senario nr 2

//Given that I am on the web page localhost:3000

//And that the the products are available in the store
//this.Given(/^that the the products are available in the store$/, function (callback) {
//});

//When I add 1 unit of the same products to the cart

this.When(/^I add (\d+) unit of the same products to the cart$/, async function () {
  let addUnit = await $('#add');
  let theButton = await $('.searchbutton');

   await addUnit.sendKeys("Cava");
   await theButton.click();
 
});
 
//And I add 1 unit of the same products to the cart
//And I add 1 unit of the same products to the cart
//Then the products should be added to the cart

//And the quantity of the products in the cart is 3

 // Scenario nr 3:  
  
 //Given that I am on the web page localhost:3000

 //And that the products are available in the store

 //When I add 0 unit of the products to the cart

 this.When(/^I add (\d+) unit of the products to the cart$/, function (arg1, callback) {
 });

 //Then the products should not be added to the cart

 this.Then(/^the products should not be added to the cart$/, function (callback) {
 }); 
}