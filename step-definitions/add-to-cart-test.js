let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');
let assert = require('assert');

module.exports = function () {

    let cart;

    this.Given(/^that the products are available in the store$/, function () {
       // Which product? Impossible to test Cucumber can't read ahead
       // and then go back to a given so we don't know what products
       // you want to add so we can't test a single thing here...
    });

    this.When(/^I add one product to the cart$/, function () {
        cart = new ShoppingCart();
        cart.add(Product.products[129], 1)
    });

    this.Then(/^the product should be added to the cart$/, function () {
        let productWasFound = false;
        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.product === Product.products[129]) {
                productWasFound = true;
                break;
            }
        }

        assert(productWasFound, 'The product added was not in the cart.')

    });

    this.When(/^I add one other product to the cart$/, function () {
        cart.add(Product.products[134], 1)
    });

    this.Then(/^the two different products should be added to the cart$/, function () {
        let productsFound = {
            'found129': false,
            'found134': false
        };

        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.product === Product.products[129]) {
                productsFound.found129 = true;
            }
            if (thingToBuy.product === Product.products[134]) {
                productsFound.found134 = true;
            }
        }


        assert(productsFound.found129, 'Could not found the first of the added products in the cart.');
        assert(productsFound.found134, 'Could not found the secound of the added products in the cart.');

    });


    let outOfStockProduct;
    let statusFromAdd;

    this.Given(/^that there is a product that is out of stock$/, function () {
        // find a random product that is out of stock
        let maxTries = 10000;
        let tries = 0;
        do {
            let randomIndex = Math.floor(Math.random() * Product.products.length);
            outOfStockProduct = Product.products[randomIndex];
            tries++;
        } while (outOfStockProduct.iLager > 0 && tries < maxTries);

        assert(outOfStockProduct.iLager === 0, 'Tried ' + maxTries + ' times to find a product that was not in stock but failed!');
    });



    this.When(/^I try to add that product$/, function () {
        if (outOfStockProduct.iLager === 0) {
            statusFromAdd = cart.add(outOfStockProduct, 1);
        }


    });

    this.Then(/^it should show a message$/, function () {
        let warningMsg = statusFromAdd.warning || '';
        assert(warningMsg.includes('but we only have'), 'Your order should show that it is not in stock');
    });




}






