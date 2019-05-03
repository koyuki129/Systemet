let Search = require('../www/js/search.js');

module.exports = function () {

    let search = new Search();

   this.Given(/^that I have a list of searched products$/, function () {

   });

    this.When(/^I sort the products$/, function () {
        search.sortProductsByName('red');
       
    });

    this.Then(/^the names of the products should be sorted in ascending alphabetical order$/, function () {
        // since sort is destructrive - changes the array you apply it to
        // we can't sort the searchResult direclty here because
        // that would sort it correctly even if the program failed
        // instead we take a copy of the array and sort it here
        // then we compare with the array from the program

        // make the copy
        let searchResultCopy = search.searchResult.slice();

        // sort the copy
        searchResultCopy.sort(function (a, b) {
            return a.namn > b.namn ? 1 : -1;
        });


        // actually since there are several products with the same namn
        // the sort might sort them differently each time
        // and so we can not use assert.deepEqual
        // but have to check that the sort is ok just by namn
        let sortedCorrectly = true;
        for (let i = 0; i < search.searchResult.length; i++) {
            sortedCorrectly = sortedCorrectly && search.searchResult[i].namn === searchResultCopy[i].namn;
        }


        assert(sortedCorrectly, 'The result was not sorted ascending by namn.');



    });


}

