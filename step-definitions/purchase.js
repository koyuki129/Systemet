let assert = require('assert');
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {


    let cart;
    cart = new ShoppingCart();
    cart.add(Product.products[120], 1);

    let reciept = cart.rowsum

this.When(/^I checkout$/, function () {

  if(cart.thingsToBuy.includes(cart.product)){
    return reciept;
  }

  console.log(cart.thingsToBuy);

  cart.checkout(Product.products[120])


  });


  this.Then(/^the cart should be emptied$/, function () {
   assert.deepStrictEqual(cart.thingsToBuy, [], 'the cart is not empty');
});

this.Then(/^I should get the confirmation that the products are bought included the total price paid$/, function () {  
 //assert(cart.thingsToBuy.includes(cart.reciept),'No reciept!')
});

}