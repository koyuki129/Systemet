let Product = require('../www/js/product.js');
let Search = require('../www/js/search.js');
let sortiment = require('../www/json/sortiment.json');

function getARandomProductWithAName2() {
    let product;
    do {
        let rand = Math.floor(Math.random() * sortiment.length);
        product = sortiment[rand];
    } while (typeof product.namn2 !== 'string');
    return product;
}

module.exports = function () {

    let chosenProduct = getARandomProductWithAName2();
    let toSearchFor;
    let search = new Search();

    this.Given(/^that I am searching by "([^"]*)" value of the property "([^"]*)"$/, function (partial, propertyName) {
        toSearchFor = chosenProduct[propertyName];
        if (partial === "a partial") {
            toSearchFor = toSearchFor.substr(1);
        }
    });
    
    this.When(/^I search$/, function () {
        search.findProducts(toSearchFor);
    });

    this.Then(/^I should be given a list of products that matches my search$/, function () {
        assert(search.searchResult.length > 0, "The list is empty");
        let foundChosenProductInSearch = false;
        for (let result of search.searchResult) {
            if (result.nr === chosenProduct.nr) {
                foundChosenProductInSearch = true;
                break; // no need to continue looping through search results because product found
            }
        }
        assert(foundChosenProductInSearch, 'The given product (nr ' + chosenProduct.nr + ') is not found using the searchTerm "' + toSearchFor + '"');
    });



}