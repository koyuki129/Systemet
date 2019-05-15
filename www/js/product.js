class Product {

  constructor(data) {
    // just transfer all properties 
    // from data to "this" 
    Object.assign(this, data);
  }

  static async loadJson() {
    // load json convert to real Product instances
    // and store Product.product
    let temp = await $.getJSON('/json/sortiment.json');
    let products = [];
    for (let t of temp) {
      products.push(new Product(t));
    }
    Product.products = products;
    // stop hiding the body - now we products
    $('body').removeClass('hidden');
  }

}

// Start loading the json data for products
Product.loadJson();

//module.exports = Product;
// Nu är products en array med 18 695 instanser av Product

// Export the class as a module if on backend
if (typeof module === 'object') {
  module.exports = Product;
}
