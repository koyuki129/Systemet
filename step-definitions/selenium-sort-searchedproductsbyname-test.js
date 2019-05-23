let assert = require('assert');
let { $, sleep } = require('./funcs.js');

module.exports = function () {
  this.Given(/^that I have a list of search results$/, async function () {
    let searchBar = await $('.search #search');
    await searchBar.sendKeys("Renat");
    let searchButton = await $('.search .searchbutton');
    await searchButton.click();
  });

  this.When(/^I press bokstavsordning button$/, async function () {
    let bokstavsordningButton = await $('.search-page .bokstavsordning');
    assert.notEqual(bokstavsordningButton, null, "Could not find the bokstavsordning button");
    await bokstavsordningButton.click();
  });

  this.Then(/^the names of the products should be sorted in ascending alphabetical order$/, async function () {
    let searchResultNames = await $('.product h2:first-child');

    for (let i = 0; i < searchResultNames.length; i++) {
      searchResultNames[i] = await searchResultNames[i].getText();
    }
    let copy = searchResultNames.slice();
    searchResultNames.sort();
    assert.deepStrictEqual(copy, searchResultNames, "The list is not sorted in ascending alphabetical order");
  });


}
