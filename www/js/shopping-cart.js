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
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy[i].quantity = newQuantity;
      }
    }
  }

  raiseQuantityByOne(product) {
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy[i].quantity++

      }
    }
  }

  lowerQuantityByOne(product) {

    for (let i = 1; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy[i].quantity--
      }
    }
  }

  remove(product) {
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy.splice(i, 1);
        i--;
      }
    }
  }

  overviewOfCart(product) {

  }

  findProductInStore(product) {

  }

  purchase() {

  }

  emptyCart() {

  }

  sumOfProducts() {

  }


}