let assert = require('assert');

module.exports = class ShoppingCart {

  constructor() {
    this.thingsToBuy = [];

  }

  add(product, quantity) {

    this.thingsToBuy.push({
        product: product,
        quantity: quantity
      });
  }

  editQuantity(product, newQuantity) {

  }

  remove(product) {
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy[i].quantity -= 2;
        this.thingsToBuy.splice(i, 1);
        i--;
      }
    }
  }

  overviewOfCart(product) {

  }

  purchase() {

  }

  emptyCart() {
   

  }

  sumOfProducts() {

  }


}