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