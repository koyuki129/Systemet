let assert = require('assert');
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {


    let cart;


    this.Given(/^that there is one products with one unit in the cart$/, function () {
        cart = new ShoppingCart();
        cart.add(Product.products[129], 1)


    });

    this.When(/^I edit the quantity for that product to (\d+)$/, function (quantityToChangeTo) {
        cart.editQuantity(Product.products[129], quantityToChangeTo);

    });

    this.Then(/^the quantity of that product in the cart should be (\d+)$/, function (newQuantity) {
        assert.equal(cart.thingsToBuy[0].quantity, newQuantity, 'the cart didnt have the right quantity, expected ' + newQuantity + ' got ' + cart.thingsToBuy[0].quantity);
    });

    this.Given(/^that there is two products with one unit each in the cart$/, function () {
        cart = new ShoppingCart();
        cart.add(Product.products[129], 1);
        cart.add(Product.products[130], 1);


    });

    this.When(/^I edit the quantity for one of the products by one$/, function () {
        cart.editQuantity(Product.products[129], 2);
    });

    this.Then(/^the quantity of that product in the cart should be two and the other still one$/, function () {
        assert.equal(cart.thingsToBuy[0].quantity, 2, 'the cart didnt have the right quantity, expected 2 got ' + cart.thingsToBuy[0].quantity);
        assert.equal(cart.thingsToBuy[1].quantity, 1, 'the cart didnt have the right quantity, expected 1 got ' + cart.thingsToBuy[0].quantity);

    });

    this.When(/^I raise the quantity for that product by one$/, function () {
        cart.raiseQuantityByOne(Product.products[129])
    });

    this.When(/^I raise the quantity for one of the products by one$/, function () {
        cart.raiseQuantityByOne(Product.products[129])

    });
    this.When(/^I lower the quantity of that product by one$/, function () {
        cart.lowerQuantityByOne(Product.products[129])

    });
    this.Then(/^the quantity of that product in the cart should still be one$/, function () {

        assert.equal(cart.thingsToBuy[0].quantity, 1, 'the cart didnt have the right quantity, expected 1 got ' + cart.thingsToBuy[0].quantity);
      });
      this.When(/^I lower the quantity for one of the products by one$/, function () {

        cart.lowerQuantityByOne(Product.products[129])
      });

      this.Then(/^the quantity of that product in the cart should be one and the other still one$/, function () {

        assert.equal(cart.thingsToBuy[0].quantity, 1, 'the cart didnt have the right quantity, expected 1 got ' + cart.thingsToBuy[0].quantity);
        assert.equal(cart.thingsToBuy[1].quantity, 1, 'the cart didnt have the right quantity, expected 1 got ' + cart.thingsToBuy[0].quantity);
      });
}
