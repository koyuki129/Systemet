class ShoppingCart {

  constructor() {
    this.thingsToBuy = [];
    if (window) {      
      let loadedCart = window.localStorage.getItem('shopping-cart')
      if (loadedCart) {
        this.thingsToBuy = JSON.parse(loadedCart);
      }
    }

  }

  add(product, quantity) {

    let changeQuantity = false;


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
      });
    
  }

    let status = { ok: true };


    if (product.iLager / 1 < quantity / 1) {
      status.warning = 'You wanted ' + quantity + ' units but we only have ' + product.iLager + ' left in stock. This might lead to a delay in delivery...';
    }

    window && window.localStorage.setItem('shopping-cart', JSON.stringify(this.thingsToBuy));

    return status;
  }

  editQuantity(product, newQuantity) {
    assert.typeOf(newQuantity, 'number', 'The new quantity is not a number!');

    // since assert does not work in browser (by default)
    // we have two choices - add a lib like chai.js on the fronedn
    // or rewrite thing like this
    /*if(typeof newQuantity !== 'number'){
      throw(new Error('The new quantity is not a number!'));
    }*/
    // we decided to load the chai library in the browser!
    if (newQuantity < 1) {
      newQuantity = 1;
    }
    // assert(newQuantity >= 1, 'The new quantity ' + newQuantity + ' is less than 1');
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy[i].quantity = newQuantity;
      }
    }
    
    window && window.localStorage.setItem('shopping-cart', JSON.stringify(this.thingsToBuy));
  }

  raiseQuantityByOne(product) {
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy[i].quantity++

      }
    }
    
    window && window.localStorage.setItem('shopping-cart', JSON.stringify(this.thingsToBuy));
  }

  lowerQuantityByOne(product) {


    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        assert(this.thingsToBuy[i].quantity - 1 >= 1, 'The new quantity ' + ' is less than 1');
        this.thingsToBuy[i].quantity--
      }
    }

    window && window.localStorage.setItem('shopping-cart', JSON.stringify(this.thingsToBuy));
  }

  remove(product) {
    for (let i = 0; i < this.thingsToBuy.length; i++) {
      if (this.thingsToBuy[i].product === product) {
        this.thingsToBuy.splice(i, 1);
        i--;
      }
    }

    window && window.localStorage.setItem('shopping-cart', JSON.stringify(this.thingsToBuy));
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

    window && window.localStorage.setItem('shopping-cart', JSON.stringify(this.thingsToBuy));
  }

  getRowSum(row) { return (row.product.prisinklmoms * row.quantity).toFixed(2); }

  sumOfProducts() {
    let total = 0;
    for (let thing of this.thingsToBuy) {
      total += Number(this.getRowSum(thing));
    }

    return total;
  }

}

// Export the class as a module if on backend
if(typeof module === 'object'){
  module.exports = ShoppingCart;
}