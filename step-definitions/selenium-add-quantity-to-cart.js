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

 

  let add = await $('.add')
  await add[0].click();
  await add[0].click();
 
 });

//Then the products should be added to the cart

this.Then(/^the products should be added to the cart$/, async function () {
  let searchBox = await $('.search #search');
  await searchBox.sendKeys('Cava');
  //( 'The unit should not be added!');
});

//And the quantity of the products in the cart is 2 

this.Then(/^the quantity of the products in the cart is (\d+)$/, async function (units) {
  let searchButton = await $('.searchbutton');
  await searchButton.sendKeys('Cava');
  await searchButton.sendKeys('Cava');
  //( 'The quantity should not be added!');
}); 

// Senario nr 2

//Given that I am on the web page localhost:3000



this.When(/^I add (\d+) unit of the same products to the cart$/, async function (unit) {
 
  let searchBox = await $('.search #search');
  await searchBox.clear();
  await searchBox.sendKeys('Cava');
 
  let searchButton = await $('.searchbutton')
  await searchButton.click();
 
  let add = await $('.add');
  
  await add[0].click();
});
 
//And I add 1 unit of the same products to the cart


  //And I add 1 unit of the same products to the cart
  
//Then the products should be added to the cart
 
//And the quantity of the products in the cart is 3
this.Then(/^the quantity of the products(\d+) in the cart is $/, async function (units) {
  let searchButton = await $('.searchbutton');
  await searchButton.sendKeys('Cava');
  await searchButton.sendKeys('Cava');
  await searchButton.sendKeys('Cava');
  //( 'The quantity should not be added!');
    
  
  
});

 // Scenario nr 3:  
  
 //Given that I am on the web page localhost:3000

 //And that the products are available in the store

 //When I add 0 unit of the products to the cart

 this.When(/^I add (\d+) unit of the products to the cart$/, async function (unit) {
  let searchBox = await $('.search #search');
  await searchBox.sendKeys('0');
  
  let searchButton = await $('.searchbutton')
  await searchButton.click();

});

 //Then the products should not be added to the cart

 this.Then(/^the products should not be added to the cart$/, function () {
 }); 
}