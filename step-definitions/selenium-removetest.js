let {$, sleep} = require('./funcs.js');     
module.exports = function(){

    
  this.Given(/^that I am on the web page localhost:(\d+)$/, async function (portNumber) {
    // not sure how to detect when we fail to load the page?
    await helpers.loadPage('http://localhost:' + portNumber);
  });


  this.Given(/^that there is one products in the cart$/, async function () {
    
  });

  this.When(/^I press remove button$/, async function () {
    let removeButton = await $('.cart-items [data-action="pressRemove"]');
    
    assert.notEqual(removeButton, null, 'Could not find the start button');

    await removeButton.click();
    
  });


}