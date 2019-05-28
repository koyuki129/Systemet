let { $, sleep } = require('./funcs.js');
module.exports = function () {

   this.Given(/^that I search and added one products to the cart$/, async function () {
        
        let searchBox = await $('#search');
        let theButton = await $('.searchbutton');
      
        await searchBox.sendKeys("Harviestoun Old Engine Oil");
        await theButton.click();

        let add = await $('.search-page .add');
        if (add.length > 0) {
          add = add[0];
  }
       
  assert.notEqual(add, null, 'Could not find the addbuttom');

  await add.click();

  let firstProduct = await $('.cart-items td:first-child');
  this.addedProduct1 = await firstProduct.getText();
  
        await sleep(100);
  });

  this.When(/^I press on the cart to see the overview$/, async function () {
      let theButton = await $('.shoppingcart');
      console.warn("theButton", theButton.constructor.name);
      assert(theButton !== null, "The .shoppingcart doesn't exist");
      if (theButton) {
        await theButton.click()
        await sleep(100);
      }
  });

  
 
//S2

 this.Given(/^that I search and added products to the cart$/, async function () {
  let searchBar = await $('.search #search');
  assert.notEqual(searchBar, null, 'Could not find the searchbar');
  await searchBar.sendKeys("Brancott Estate");
  
  let searchButton = await $('.searchbutton');
  assert.notEqual(searchButton, null, 'Could not find the search button');
  await searchButton.click();

  let add = await $('.search-page .add');
  assert.notEqual(add, null, 'Could not find the add button');
  if (Array.isArray(add) === true){
    add = add[0];
  }
  
  await add.click();
  
  let firstProduct = await $('.cart-items td:first-child');
  this.addedProduct1 = await firstProduct.getText();
  
  await searchBar.clear();
  await searchBar.sendKeys("Daruvar");
  await searchButton.click();

  add = await $('.search-page .add');
  assert.notEqual(add, null, 'Could not find the add button');
  if (Array.isArray(add) === true){
    add = add[0];
  }

  await add.click();

  
  let secondProduct = await $('.cart-items td:first-child');
  this.addedProduct2 = await secondProduct[1].getText();

  await searchBar.clear();
  await searchBar.sendKeys("Svarta Tranan");
  await searchButton.click();

  add = await $('.search-page .add');
  assert.notEqual(add, null, 'Could not find the add button');
  if (Array.isArray(add) === true){
    add = add[0];
  }

  await add.click();

  
  let thirdProduct = await $('.cart-items td:first-child');
  this.addedProduct3 = await thirdProduct[1].getText();
});


this.Then(/^show the total price of products in the cart$/, async function () {
  let productTotPrice = await $('.cart-items td:nth-child(3)');
  let totPrice = await $('.totPrice');

  totPrice = await totPrice.getText();
  totPrice = Number(totPrice);
  let calculatedSum = 0;
  
  for (let i = 0; i < productTotPrice.length; i++) {
   productTotPrice[i] = await productTotPrice[i].getText()
    productTotPrice[i] = Number(productTotPrice[i])
    calculatedSum += productTotPrice[i];
  }

  assert(calculatedSum == totPrice, "fel totalsumma i varuvargnen" + calculatedSum + ". " + totPrice)
});


} 