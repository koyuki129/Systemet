let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {


  let cart;

  let receipt;

  this.When(/^I checkout$/, function () {

    cart = global.cart; // Cart from removetest.js

    receipt = cart.checkout();

  });


  this.Then(/^the cart should be emptied$/, function () {
    assert.deepEqual(cart.thingsToBuy, [], 'the cart is not empty');
  });

  this.Then(/^I should get the confirmation that the products are bought including the total price paid$/, function () {

    assert.deepEqual(receipt.bought[0].product, Product.products[129], 'The correct product was not bought/shown in receipt');
    assert.equal(receipt.sum, Product.products[129].prisinklmoms, 'Incorrect sum in receipt');
  });

  this.Then(/^I should get the confirmation that (\d+) products are bought including the total price paid$/, function (numberOfProducts) {

    assert.equal(numberOfProducts, receipt.bought.length, 'Wrong number of products in receipt');
    

    // get all products listed on the receipt and store in a new array boughtProducts
    let boughtProducts = [];
    for(let line of receipt.bought){
      boughtProducts.push(line.product);
    }
  
    assert(boughtProducts.includes(Product.products[129]), 'The correct product was not bought/shown in receipt');
    assert(boughtProducts.includes(Product.products[130]), 'The correct product was not bought/shown in receipt');
    assert.equal(receipt.sum, Product.products[129].prisinklmoms + Product.products[130].prisinklmoms, 'Incorrect sum in receipt');


  });

}