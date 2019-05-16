let { $, sleep } = require('./funcs.js');
module.exports = function () {
        let addedProduct1;
        let addedProduct2;
        let outOfStockProduct;

        this.Given(/^that the products are available in the store$/, function () {

        });

        this.When(/^I add one product to the cart$/, async function () {
                let searchBar = await $('.search #search');
                let searchButton = await $('.search .searchbutton');

                await searchBar.sendKeys("Auld Rare Benriach");
                await searchButton.click();

                let add = await $('.search-page .add');
                if(add.length > 0){
                add = add[0];
                }

                assert.notEqual(add, null, 'Could not find the addbuttom');

                await add.click();

                let firstProduct = await $('.cart-items td:first-child');
                addedProduct1 = await firstProduct.getText();

        });


        this.Then(/^i should see the product in the cart$/, async function () {

                let cartItems = await $('.cart-items td:first-child');                
                assert((await cartItems.getText()).includes(addedProduct1), "The text is not Auld Rare Benriach");
                //let product = await $('td:first-child');



                //assert(product.getText() === 'Auld Rare Benriach', "The text is not Auld Rare Benriach");


                //assert(element.getText() === 'Brännvinn', "The text is not Brännvin");
                //Ifall .getText() 'inte skulle funka så använd instället metoden .get_attribute("innerText");

                //$('table.cart-items tbody td:first-child')[0].innerText
                //assert(cartItems, 'Auld Rare Benriach', "The cart does not contain any products")


        });


  

        this.Then(/^I should see the products in the cart$/, async function () {
                let cartItems = await $('.cart-items td:first-child');                
                assert((await cartItems.getText()).includes(addedProduct1), "The text is not Auld Rare Benriach");
                console.log(cartItems)
                 cartItems = await $('.cart-items td:first-child');                
                assert((await cartItems.getText()).includes(addedProduct2), "The text is not Auld Rare Benriach");

      


        });


        this.When(/^I add one product that is out of stock to the cart$/, async function () {
                let outOfStock = await $('.search-page .outOfStock');
                let searchBar = await $('.search');
                await searchBar.sendKeys("Smirnoff");

                assert.notEqual(outOfStock, null, 'Could not find the addbuttom');
                await outOfStock.click();
        });

        this.Then(/^the page should show a message$/, async function () {
                let outOfStock = await $('.search-page .outOfStock');

                assert.notEqual(outOfStock, 'Tillfälligt slut', 'Your order should show that it is not in stock');
                await outOfStock.click();
        });



}