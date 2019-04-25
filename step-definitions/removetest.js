let assert = require('assert');
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {

  let cart;

  this.Given(/^that there is one products in the cart$/, function () {
    cart = new ShoppingCart();
    // for (let i = 0; i < amountOfProducts; i++) {
    cart.add(Product.products[129], 1)
    // }

  });

  this.When(/^I remove the only product from the cart$/, function () {

    cart.remove(Product.products[129], 1);

  });


  this.Then(/^the cart should not contain any products anymore$/, function () {
    assert.deepStrictEqual(cart.thingsToBuy, [], 'the cart was not empty');

  });

  this.Given(/^that there is two units of the same product in the cart$/, function () {

    cart = new ShoppingCart();
    cart.add(Product.products[129], 2)


  });

  this.Given(/^that there is two different products in the cart$/, function () {

    cart = new ShoppingCart();
    cart.add(Product.products[130], 1)
    cart.add(Product.products[129], 1)

  });

  this.When(/^I remove both of the products from the cart$/, function () {

    cart.remove(Product.products[130]);
    cart.remove(Product.products[129]);

  });

  this.When(/^I remove one of the two products from the cart$/, function () {

  cart.remove(Product.products[129]);

  });

this.Then(/^the cart should not contain the removed product anymore$/, function () {
  assert(cart.thingsToBuy[0].product === Product.products[130], 'the cart was not empty');

       });

}

