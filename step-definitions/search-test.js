let Product = require('../www/js/product.js');
let Search = require('../www/js/search.js');


module.exports = function () {

    let name;
    let search = new Search();

    this.Given(/^that I am searching by a partial namn$/, function () {
        name = "vodk";
    });

    this.When(/^I search$/, function () {
        search.findProducts(name);
      });

      this.Then(/^I should be given a list with the product that matches the varnummer$/, function () {
        
      });
}