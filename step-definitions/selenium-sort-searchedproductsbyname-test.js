let { $, sleep } = require('./funcs.js');

module.exports = function () {
    this.Given(/^that I have a list of search results$/, async function () {
        let searchBar = await $('.search #search');
        await searchBar.sendKeys();
        let searchButton = await $('.search .searchbutton');
        await searchButton.click();
      });

      this.When(/^I press alphabetical order button$/, async function () {
        let alphabeticalOrderButton = await $('.search-page .sortera .Namn A till Ö');
        assert.notEqual(alphabeticalOrderButton, null, "Could not find the alphabeticalorder button");
        await alphabeticalOrderButton.click();
      });
}