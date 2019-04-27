let assert = require('assert');
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {

    let cart;

    this.Given(/^that there is (\d+) products in the cart$/, function (numberOfProductsInCart) {
        // don't choose more than 18000 products ;)
        cart = new ShoppingCart();
        for (let i = 0; i < numberOfProductsInCart; i++) {
            cart.add(Product.products[i], 1)
        }
    });

    this.When(/^I empty the cart$/, function () {

        cart.emptyCart();
        
    });


    this.Then(/^the cart should not contain any products$/, function () {
      
        assert.equal(cart.thingsToBuy.length, 0, 'the cart is not empty');
        // assert.deepStrictEqual(cart.thingsToBuy, [], 'the cart is not empty');
    });
}