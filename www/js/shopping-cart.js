let assert = require('assert');

module.exports = class ShoppingCart {

  constructor() {
    this.thingsToBuy = [];

  }

  add(product, quantity) {
    this.thingsToBuy.push({
      product: product,
      quantity: quantity,
      rowSum: product.prisinklmoms * quantity,

    });

    let status = {ok: true};

    
    if(product.iLager / 1 < quantity / 1){
      status.warning = 'You wanted ' + quantity + ' units but we only have ' + product.iLager + ' left in stock. This might lead to a delay in delivery...';
    }

    return status;
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
    return this.thingsToBuy;
    
  }

  checkout() {

    for (let i = 0; i < this.thingsToBuy.length; i++) {
      return  this.emptyCart();
    }
  

    for (let i = 0; i < this.thingsToBuy.length; i++) {
        return this.sumOfProducts();
      }
    
    }
  

  emptyCart() {
     this.thingsToBuy.length = 0;
}
  

  sumOfProducts(rowSum) {
    let total = 0;
    for(let i = 0; i<rowSum.length; i++){
      total += rowSum[i];

    }
      return total;
     
   
  }
    
}