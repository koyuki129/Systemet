let { $, sleep } = require('./funcs.js');

module.exports = function () {

    /*this.Given(/^that I am on the web page localhost:(\d+)$/, async function (portNumber) {
        // not sure how to detect when we fail to load the page?
        await helpers.loadPage('http://localhost:' + portNumber);
        await sleep(1000);
    });*/

    this.Given(/^that I am searching for "([^"]*)"$/, async function (searchString) {
        let searchBar = await $('.search #search');
        assert.notEqual(searchBar, null, 'Could not find the searchbar');
        await searchBar.sendKeys(searchString);
    });

    this.When(/^I press search button$/, async function () {
        let searchButton = await $('.search .searchbutton');
        assert.notEqual(searchButton, null, "Could not find the search button");
        await searchButton.click();
    });

    this.Then(/^I should be given a list of products that matches "([^"]*)"$/, async function (searchString) {
        let searchResult = await helpers.getElementsContainingText(searchString);
        console.log("searchResult", searchResult);
        assert.notEqual(searchResult.length, 0, "Did not find any element on the page containing the search string");
    });

    this.Given(/^that I am searching for (\d+)$/, async function (searchNumber) {
        let searchBar = await $('.search #search');
        assert.notEqual(searchBar, null, 'Could not find the searchbar');
        await searchBar.sendKeys(searchNumber);
    });


    this.Then(/^I should be given a list of products that matches (\d+)$/, function (searchNumber) {

    });



}