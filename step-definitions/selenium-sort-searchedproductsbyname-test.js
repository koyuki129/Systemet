let { $, sleep } = require('./funcs.js');

module.exports = function () {
    this.Given(/^that I have a list of search results$/, async function () {
        let searchBar = await $('.search #search');
        await searchBar.sendKeys("Renat");
        let searchButton = await $('.search .searchbutton');
        await searchButton.click();
        let searchPage = await $('.search-page');
        await searchPage.getText();

      });

      this.When(/^I press bokstavsordning button$/,  async function () {
        let bokstavsordningButton = await $('.search-page .bokstavsordning');
        assert.notEqual(bokstavsordningButton, null, "Could not find the bokstavsordning button");
        await bokstavsordningButton.click();
       
      });
}
