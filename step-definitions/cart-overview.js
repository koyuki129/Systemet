let Product = require('../www/js/product.js');
let ShoppingCart = require('../www/js/shopping-cart.js');

module.exports = function () {

  let cart;
  let overview;
  let quantity;
  let price;

  this.Given(/^that I have added one products to the cart$/, function () {
    cart = new ShoppingCart();
    cart.add(Product.products[118], 1);
  });

  this.When(/^I ask for the overview$/, function () {
    overview = cart.overviewOfCart();
    assert.typeOf(overview, 'array', 'Expected the overview to be an array!');
  });

  this.Then(/^the product should be among the products in the overview$/, function () {
    let foundInCart = false;
    for (let itemInCart of overview) {
      if (itemInCart.product === Product.products[118]) {
        foundInCart = true;
        quantity = itemInCart.quantity;
        break; // stop the loop, because we found the product
      }
    }
    assert(foundInCart, 'Could not find the product added in the overview of the cart.');
  });

  this.Then(/^the correct quantity should be shown\.$/, function () {
    assert.equal(quantity, 1, 'Expected the quantity to be 1 but it was ' + quantity);
  });

  //Scenario nr 2
  this.Given(/^that I have added two different products to the cart$/, function () {
    cart = new ShoppingCart();
    cart.add(Product.products[118], 1);
    cart.add(Product.products[129], 1);
  });

  this.When(/^I enter the cart$/, function () {
    overview = cart.overviewOfCart();
    assert.typeOf(overview, 'array', 'Expected the overview to be an array!');
  });

  this.Then(/^the products should be visible in the cart$/, function () {
    assert(cart.thingsToBuy[0].product === Product.products[118], 'Expected product was wrong');
    assert(cart.thingsToBuy[1].product === Product.products[129], 'expected product was wrong');
  });
  //Scenario nr 3
  this.Given(/^that I have added products to the cart$/, function () {
    cart = new ShoppingCart();
    cart.add(Product.products[118], 1);
    cart.add(Product.products[129], 1);
    cart.add(Product.products[106], 1);
    cart.add(Product.products[133], 1);
  });

  this.When(/^I enter the cart to see the products$/, function () {
    overview = cart.overviewOfCart();
    assert.typeOf(overview, 'array', 'Expected the overview to be an array!');
  });

  this.Then(/^show the total price of products in the cart$/, function () {


    assert.equal(cart.sumOfProducts(), Product.products[118].prisinklmoms + Product.products[129].prisinklmoms + Product.products[106].prisinklmoms + Product.products[133].prisinklmoms, 'Incorrect sum in receipt');
  });

}