
let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');
 
module.exports = function(){
 
  
 
  let cart;
  let addQuantityOfProducts;
 
  //Given that the products are available in the store
  this.Given(/^that the products (\d+) are available in the store$/, function (quantityOfProducts){
    addQuantityOfProducts= quantityOfProducts;
    cart = new ShoppingCart(quantityOfProducts / 2);
    assert.equal(quantityOfProducts, cart.productLeft, 'The cart was not created with requested quantity of products');
  });
 
 //When I add 2 units of the same products to the cart
 this.When(/^I add 2 units of the same products to the cart$/, function () {
    cart = new ShoppingCart();
    cart.add(Product.products[100], 2)
    });

  //Then the products should be added to the cart

  this.Then(/^the products should be added to the cart$/, function () {
    
    cart.add(Product.products[100],2)

});

           //And the quantity of the products in the cart is 2
           this.Then(/^the quantity of the products in the cart is 2$/, function () {
            let quantityWasAdded= false;
            for (let thingToBuy of cart.thingsToBuy) {
                if (thingToBuy.products === Product.products[100],[150]) {
                    quantityWasAdded= true;
                    break;
                }
            }
    
        assert(quantityWasAdded, 'the quantity of the products was not added.')
    
      });
  
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
        let quantityWasAdded= false;
        for (let thingToBuy of cart.thingsToBuy) {
            if (thingToBuy.products === Product.products[100],[150],[170]) {
                quantityWasAdded= true;
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
    
        cart.add(Product.products[300],0)
    
    });
}


