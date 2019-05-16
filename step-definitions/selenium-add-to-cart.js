let { $, sleep } = require('./funcs.js');
module.exports = function () {

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

        });


        this.Then(/^i should see the product in the cart$/, async function () {
                let cartItems = await $( '.cart-items');
                let product = await $('td:first-child');

                for(let product of cartItems){
                        return product
                }

                assert(product.get_attribute("Auld Rare Benriach"), "The text is not Auld Rare Benriach");

                //let element = await $('... etc');
                //assert(element.getText() === 'Brännvinn', "The text is not Brännvin");
                //Ifall .getText() 'inte skulle funka så använd instället metoden .get_attribute("innerText");
                //$('table.cart-items tbody td:first-child')[0].innerText
                //assert(cartItems, 'Auld Rare Benriach', "The cart does not contain any products")


        });


        this.When(/^I add one other product to the cart$/, async function () {
                let searchBar = await $('.search #search');
                let searchButton = await $('.search .searchbutton');

                await searchBar.sendKeys("Moscato d'Asti");
                await searchButton.click();

                let add = await $('.search-page .add');
                if(add.length > 0){
                add = add[0];
                }

                assert.notEqual(add, null, 'Could not find the addbuttom');

                await add.click();

        });

        this.Then(/^I should see the products in the cart$/, async function () {

                let cartItems = await $('.cart-page *');
                assert(cartItems, 'Öl', "The cart does not contain any products")
                assert(cartItems, 'Vin', "The cart does not contain any products")
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