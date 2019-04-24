class Product {
 
  constructor(data){
    Object.assign(this, data);
  }
 
}

let temp = require('./sortiment.json');
let products = [];
for(let t of temp){
  products.push(new Product(t));
}