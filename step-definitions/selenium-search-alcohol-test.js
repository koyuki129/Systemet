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
        let searchPage = await $('.search-page');
        let searchResultText = await searchPage.getText();
        assert(searchResultText.includes(searchString), "Did not find any text on the search-page containing the search string");
    });

}