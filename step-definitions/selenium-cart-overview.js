let { $, sleep } = require('./funcs.js');
module.exports = function () {

   this.Given(/^that I seach and added one products to the cart$/, async function () {
        
        let searchBox = await $('#search');
        let theButton = await $('.searchbutton');
      
        await searchBox.sendKeys("Vin");
        await theButton.click();

        // is the search instant
        // or do we have to wait for the result
        // we could need to sleep or something to wait for the result

        let add = await $('.search-page .add');
       
        await add[0].click();
  });

  this.When(/^I press on the cart to see the overview$/, async function () {
      let theButton = await $('.shoppingcart');
      assert(theButton !== null, "The .shoppingcart doesn't exist");
      if (theButton) {
        await theButton.click()
      }
  });
   

}