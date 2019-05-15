let { $, sleep } = require('./funcs.js');
module.exports = function () {

        this.Given(/^that the products are available in the store$/, function () {

        });

        this.When(/^I add one product to the cart$/, async function () {
                let searchBar = await $('.search');
                let theButtom = await $('.searchbutton');
                await searchBar.sendKeys("Öl")
                await theButtom.click();
                let add = await $('.search-page .add');

                assert.notEqual(add, null, 'Could not find the addbuttom');
                await add.click()

        });


        this.Then(/^i should see the product in the cart$/, async function () {

                let cartItems = await $('.cart-page *');
                assert(cartItems, 'Öl', "The cart does not contain any products")
        });


        this.When(/^I add one other product to the cart$/, async function () {

                let searchBar = await $('.search');
                let theButtom = await $('.searchbutton');
                await searchBar.sendKeys("Vin")
                await theButtom.click();
                let add = await $('.search-page .add');

                assert.notEqual(add, null, 'Could not find the addbuttom');
                await add.click()
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