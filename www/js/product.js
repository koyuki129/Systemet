class Product {
 
  constructor(data){
    // just transfer all properties 
    // from data to "this" 
    Object.assign(this, data);
  }
 
}
 
// classify
let temp = require('../json/sortiment.json');
let products = [];
for(let t of temp){
  products.push(new Product(t));
}

Product.products = products;
 
//module.exports = Product;
// Nu är products en array med 18 695 instanser av Product

// Export the class as a module if on backend
if(typeof module === 'object'){
  module.exports = Product;
}
