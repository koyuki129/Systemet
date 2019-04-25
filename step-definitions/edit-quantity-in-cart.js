let assert = require('assert');
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {


    let cart;


    this.Given(/^that there is one products with one unit in the cart$/, function () {

        cart = new ShoppingCart();
        cart.add(Product.products[129], 1)


    });

    this.When(/^I raise the quantity for that product by one$/, function () {
        cart.editQuantity(Product.products[129], 2)

    });

    this.Then(/^the quantity of that product in the cart should be two$/, function () {
       

      });

}
