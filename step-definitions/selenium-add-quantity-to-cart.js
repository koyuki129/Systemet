let { $, sleep } = require('./funcs.js');
module.exports = function () {


//And that the products are available in the store



//When I add 2 units of the same products to the cart

 this.When(/^I add (\d+) units of the same products to the cart$/, async function () {
  let addProducts = await $('.add-products[0],');
  assert(products, "The products are not added");
  let searchBox = await $('.seach-box');
  let add = await $(' .add');
  
  
});

//Then the products should be added to the cart

this.Then(/^the products should be added to the cart$/, async function (product) {
  let output = await $('.cart .output');
  let product = await output.getAttribute('innerHTML');
  assert.equal(product, 'Cava', 'The cart added no product!');
});


//And the quantity of the products in the cart is 2 

this.Then(/^the quantity of the products in the cart is 2$/, async function (quantity) {
  let output = await $('.cart .output');
  let quantity = await output.getAttribute('innerHTML');
  assert.equal(quantity, '2', 'The cart added no  quantity!');
}); 
}
 // Scenario nr 2: Successfully add quantity of products to the cart by adding it seperately  
   //Given that I am on the web page localhost:3000 
    // And that the the products are available in the store  
    
