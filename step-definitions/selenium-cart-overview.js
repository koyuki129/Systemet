let { $, sleep } = require('./funcs.js');
module.exports = function () {

   this.Given(/^that I search and added one products to the cart$/, async function () {
        
        let searchBox = await $('#search');
        let theButton = await $('.searchbutton');
      
        await searchBox.sendKeys("Harviestoun Old Engine Oil");
        await theButton.click();

        let add = await $('.search-page .add');
       
        await add.click();
        await sleep(100);
  });

  this.When(/^I press on the cart to see the overview$/, async function () {
      let theButton = await $('.shoppingcart');
      assert(theButton !== null, "The .shoppingcart doesn't exist");
      if (theButton) {
        await theButton.click()
        await sleep(100);
      }
  });

  this.Then(/^the product should be among the products in the overview$/, async function () {
    let product = await $('td:first-child');
    assert(product.getText() === 'Harviestoun Old Engine Oil', "The cart does not contain any products");
    
    await sleep(100);
  });

  this.Then(/^the correct quantity should be shown\.$/, async function () {


  });


  this.Given(/^that I search and added two different products to the cart$/, async function () {
    let searchBox = await $('#search');
    let theButton = await $('.searchbutton');
  
    await searchBox.sendKeys("Harviestoun Old Engine Oil");
    await add[0].click();
    await searchBox.sendKeys("Ysabel Regina");
    await add[0].click();
    await theButton.click();


    let add = await $('.search-page .add');
   

    await sleep(100);
  });

  
} 