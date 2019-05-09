class ShoppingCart {

  constructor() {
    this.thingsToBuy = [];

  }

  add(product, quantity) {

    let changeQuantity;


    for(let cartItem of this.thingsToBuy){
      if(cartItem.product === product ) {
        cartItem.quantity += quantity;
        changeQuantity = true;
      }
    }

    if(changeQuantity == false){
      this.thingsToBuy.push({
        product: product,
        quantity: quantity,
        get rowSum() { return this.product.prisinklmoms * this.quantity; }
      });
    }

    let status = { ok: true };


    if (product.iLager / 1 < quantity / 1) {
      status.warning = 'You wanted ' + quantity + ' units but we only have ' + product.iLager + ' left in stock. This might lead to a delay in delivery...';
    }

    return status;
  }

  editQuantity(product, newQuantity) {

    // since assert does not work in browser (by default)
    // we have two choices - add a lib like chai.js on the fronedn
    // or rewrite thing like this
    /*if(typeof newQuantity !== 'number'){
      throw(new Error('The new quantity is not a number!'));
    }*/
    // we decided to load the chai library in the browser!

    assert.typeOf(newQuantity, 'number', 'The new quantity is not a number!');
    assert(newQuantity >= 1, 'The new quantity ' + newQuantity + ' is less than 1');
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
  closeTheBrowser(browser){
    return this.thingsToBuy;
  }

  checkout() {

    let receipt = {
      bought: this.thingsToBuy.slice(),
      sum: this.sumOfProducts()
    }

    this.emptyCart();

    return receipt;
  }


  emptyCart() {
    this.thingsToBuy.length = 0;
  }


  sumOfProducts() {
    let total = 0;
    for (let thing of this.thingsToBuy) {
      total += thing.rowSum;
    }
    return total;
  }

}

// Export the class as a module if on backend
if(typeof module === 'object'){
  module.exports = ShoppingCart;
}