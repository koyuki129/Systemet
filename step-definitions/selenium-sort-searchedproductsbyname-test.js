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

     
}
