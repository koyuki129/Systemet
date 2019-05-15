class Search {

  constructor() {
    this.searchResult = [];
  }

  findProducts(searchTerm) {
    this.searchResult = [];
    for (let i = 0; i < Product.products.length; i++) {

      if (typeof Product.products[i].namn === 'string'
        && Product.products[i].namn.includes(searchTerm)) {
        this.searchResult.push(Product.products[i]);
      }

      if (typeof Product.products[i].namn2 === 'string'
        && Product.products[i].namn2.includes(searchTerm)) {
        this.searchResult.push(Product.products[i]);
      }

      // decided to use '==' comparison, not '==='
      // because we don't know when searchTerm will be a string
      // and when it will be a number
      if (Product.products[i].varnummer == searchTerm) {
        this.searchResult.push(Product.products[i]);
      }

    }

  }

  sortProductsByName(toSearchFor) {
    this.findProducts(toSearchFor);
    this.searchResult.sort(function (a, b) {
      return a.namn > b.namn ? 1 : -1;
    });
  }

}

// Export the class as a module if on backend
if(typeof module === 'object'){
  module.exports = Search;
}
