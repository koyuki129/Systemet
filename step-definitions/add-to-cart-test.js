let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');
let assert = require('assert');

module.exports = function(){

let cart;


this.Given(/^that the product is available in the store$/, function () {

  });

this.When(/^I add the product to the cart$/, function () {
    cart = new ShoppingCart();
    cart.add(Product.products[129], 1) 
});

this.Then(/^the product should be added to the cart$/, function (thingsToBuy) {
    let products = [];
    for(let product of products){
    products.add(new Product(t));
    
    if(thingsToBuy.includes(product)) {
        

    }
    }


});

        

}

