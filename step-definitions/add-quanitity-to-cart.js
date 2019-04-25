// Senario nr 1
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');
let Unit = require('../www/js/unit.js');
let Assert = require('assert');

module.exports = function () {

    let cart;
    
    this.Given(/^that the products are available in the store$/, function () {
        for (let i=0; i<Product.products.length; i++){
            if(Product.products.includes(i)){
                this.thingsToBuy.push(Product.products[i])
            }
        }


    });

    this.When(/^I add 2 units of the same products to the cart$/, function () {
        cart = new ShoppingCart();
        cart.add(Unit.products[110], 1);
        cart.add(Unit.products[110], 1);
    });

    this.Then(/^the product should be added to the cart$/, function () {
        let productWasFound = false;
        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.product === Product.products[110],[110]) {
                unitWasFound = true;
                break;
            }
        }

        assert(productWasFound, 'The quantity of the products in the cart is 1+1= 2.')

    });
// Senario nr 2
    this.When(/^I add 3 unit of the same products to the cart$/, function () {
        cart = new ShoppingCart();
        cart.add(Unit.products[100], 1);
        cart.add(Unit.products[100], 1);
        cart.add(Unit.products[100], 1);
    });

    this.Then(/^the quantity of the products in the cart is 3$/, function () {
        let unitWasFound = false;
        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.product === Unit.products[100],[100],[100] ){
                unitWasFound = true;
                break;
            }
        }

        assert(unitWasFound, 'The quantitity of the products in the cart is 1+1+1=3.')

    });
// Senario nr 3
    this.When(/^I add 0 unit of the same products to the cart$/, function () {
        cart = new ShoppingCart();
        cart.add(Unit.products[200], 0)
    });

    this.Then(/^the product should not be added to the cart$/, function () {
        let unitWasFound = false;
        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.product === Unit.products[200]) {
                unitWasFound = true;
                break;
            }
        }


    
    });




}