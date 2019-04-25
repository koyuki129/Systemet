let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');
let assert = require('assert');

module.exports = function () {

    let cart;


    this.Given(/^that the products are available in the store$/, function () {
        for (let i=0; i<Product.products.length; i++){
            if(Product.products.includes(i)){
                this.thingsToBuy.push(Product.products[i])
            }
        }


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
        let productWasFound = false;
        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.product === Product.products[129],[134] ){
                productWasFound = true;
                break;
            }
        }

        assert(productWasFound, 'The products added was not in the cart.')

    });



    this.Given(/^that there is a product that is out of stock$/, function () {

        for( let i = 0; i < Product.products.length; i++){ 
            if ( Product.products[i] === 5) {
              Product.products.splice(i, 1); 
            }
         }

    });

    this.When(/^I try to add that product$/, function () {
        let productWasFound = false;

        cart.add(Product.products[5], 1)
        assert('The product added was not in the cart.', productWasFound)
    });




}