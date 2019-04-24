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




      
}

