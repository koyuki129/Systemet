let assert = require('assert');
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function(){

    let cart;

    this.Given(/^that there is one products in the cart$/, function(){
      cart = new ShoppingCart();
      // for (let i = 0; i < amountOfProducts; i++) {
        cart.add(Product.products[129], 1) 
      // }

      });

      this.When(/^I remove the only product from the cart$/, function(){

      cart.remove();

      });


      this.Then(/^the cart should not contain any products anymore$/, function(){
        assert.deepStrictEqual(cart.thingsToBuy, [], 'the cart was not empty');
      
      });


      
}

