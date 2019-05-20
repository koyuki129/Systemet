
const Product = require('../www/js/product.js');
const ShoppingCart = require('../www/js/shopping-cart.js');

class StoredShoppingCart extends ShoppingCart {
  
  constructor() {
    super();

    // set up storage area
    this.dbRequest = window.indexedDB.open("shoppingcart", 1);
    this.dbRequest.onerror = (e) => this.handleDbError(e);
    this.dbRequest.onupgradeneeded = (e) => this.initializeDatabase(e);
    this.dbRequest.onsuccess = (e) => this.handleDbSuccess(e);
  }

  handleDbError(event) {
    console.error("Database error: ", event.target.errorCode);
  }

  initializeDatabase(event) {
    this.db = event.target.result;
    this.itemsdb = db.createObjectStore("items", { keyPath: "product" });
  }

  handleDbSuccess(event) {
    /** @type {IDBDatabase} */
    this.db = event.target.result;

    // load previously stored shopping cart contents
    const transaction = this.db.transaction(["items"], "readonly");
    const items = transaction.objectStore("items").getAll();
    items.onsuccess = (e) => {
      for (const prod of e.target.result) {
        const p = Product.products.find((v) => v.artikelid === prod.product);
        if (!p) {
          console.warn("Could not find stored product: ", prod.product);
          continue;
        }
        super.add(p, prod.quantity);
      }
    };
    items.onerror = (e) => {
      console.error("Unable to restore shopping cart: ", e.target.errorCode);
    };
  }

  /**
   * Adds the specified quantity of the product to the shopping cart.
   * @param {object} product 
   * @param {number} Quantity 
   */
  add(product, quantity) {
    const res = super.add(product, quantity);
    this.storeProduct(product);
    return res;
  }

  /**
   * Edits the quantity of the product.
   * @param {object} product 
   * @param {number} newQuantity 
   */
  editQuantity(product, newQuantity) {
    super.editQuantity(product, newQuantity);
    this.storeProduct(product);
  }

  raiseQuantityByOne(product) {
    super.lowerQuantityByOne(product);
    this.storeProduct(product);
  }

  lowerQuantityByOne(product) {
    super.lowerQuantityByOne(product);
    this.storeProduct(product);
  }

  remove(product) {
    super.remove(product);
    this.storeProduct(product);
  }

  // no override of `overviewOfCart(product)` since it doesn't write updates

  /*
  closeTheBrowser(browser){
    const items = super.closeTheBrowser();
    // store items?
    return items;
  }
  */

  // no override of `checkout()` needed since it runs `emptyCart()`

  emptyCart() {
    super.emptyCart();
    const items = this.db.transaction(["items"], "readwrite").objectStore("items");
    items.clear();
  }

  // no override of `sumOfProducts()` needed since it doesn't mutate values


  //// helpers

  storeProduct(product) {
    const item = this.overviewOfCart().find((cart) => cart.product === product);
    const items = this.db.transaction(["items"], "readwrite").objectStore("items");
    if (!item || item.quantity === 0) {
      items.delete(product.artikelid);
    } else {
      items.put({ product: product.artikelid, quantity: item.quantity });
    }
  }

}