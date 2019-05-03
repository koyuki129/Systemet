
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {



    let cart = new ShoppingCart();

    //When I add 2 units of the same products to the cart
    this.When(/^I add (\d+) units of the same products to the cart$/, function (units) {
        cart = new ShoppingCart();
        cart.add(Product.products[100], units);
    });

    //Then the products should be added to the cart

    this.Then(/^the products should be added to the cart$/, function () {
        assert.equal(Product.products[100], cart.thingsToBuy[0].product);
    });

    //And the quantity of the products in the cart is 2
    this.Then(/^the quantity of the products in the cart is (\d+)$/, function (units) {
      assert.equal(units, cart.thingsToBuy[0].quantity);
    });
/*
    // Senario nr 2

    //Given that the products are available in the store

    this.Given(/^that the the products are available in the store$/, function () {

        cart = new ShoppingCart();
        cart.add(Product.products[200], 1)

    });
    //When I add 1 unit of the same products to the cart
    this.When(/^I add 1 unit of the same products to the cart$/, function () {

        cart.add(Product.products[200], 1)
    });

    //When I add 1 unit of the same products to the cart

    //And I add 1 unit of the same products to the cart


    //And I add 1 unit of the same products to the cart

    //Then the products should be added to the cart




    //And the quantity of the products in the cart is 3

    //And the quantity of the products in the cart is 3
    
    this.Then(/^the quantity of the products in the cart is 3$/, function () {
        let quantityWasAdded = false;
        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.products === Product.products[100], [150], [170]) {
                quantityWasAdded = true;
                break;
            }
        }

        assert(quantityWasAdded, 'the quantity of the products was not added.')

    });
    //

    // Senario nr 3
    //When I add 0 unit of the products to the cart
    this.When(/^I add 0 unit of the products to the cart$/, function () {

        cart.add(Product.products[300], 0)
    });

    this.Then(/^the products should not be added to the cart$/, function () {

        cart.add(Product.products[300], 0)

    });
    */
}
