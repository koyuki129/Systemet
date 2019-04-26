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

    let status = {ok: true};

    // låt var ok men med en varning om produkten inte finns i lager (men inte har utgått)
    if(product.iLager / 1 < quantity / 1){
      status.warning = 'You wanted ' + quantity + ' units but we only have ' + product.iLager + ' left in stock. This might lead to a delay in delivery...';
    }

    return status;
  }

  editQuantity(product, newQuantity) {

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