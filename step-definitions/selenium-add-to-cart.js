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
                if (add.length > 0) {
                        add = add[0];
                }

                assert.notEqual(add, null, 'Could not find the addbuttom');

                await add.click();

                let firstProduct = await $('.cart-items td:first-child');
                this.addedProduct1 = await firstProduct.getText();

        });


        this.Then(/^I should see the product in the cart$/, async function () {
                let cartItems = await $('.cart-items td:first-child');
                assert((await cartItems.getText()).includes(this.addedProduct1), "The product is Auld Rare Benriach");

        });


        this.Then(/^I should see the products in the cart$/, async function () {
                let cartItems = await $('.cart-items td:first-child');
                assert((await cartItems[0].getText()).includes(this.addedProduct1), "The cart do not contain 2 products");
                cartItems = await $('.cart-items td:first-child');
                assert((await cartItems[1].getText()).includes(this.addedProduct2), "The cart do not contain 2 products");
        });

        let outOfStockProduct;
        this.When(/^I add one product that is out of stock to the cart$/, async function () {


                let searchBar = await $('.search #search');
                let searchButton = await $('.search .searchbutton');

                await searchBar.sendKeys("harlis Ipanema");
                await searchButton.click();

                let add = await $('.search-page .add');
                if (add.length > 0) {
                        add = add[0];
                }

                assert.notEqual(add, null, 'Could not find the addbuttom');

                await add.click();

                let outOfStock = await $('.cart-items td:first-child');
                this.outOfStockProduct = await outOfStock.getText();

        });

        this.Then(/^the page should show a message$/, async function () {
                let outOfStock = await $('.cart-items td:first-child');

                let warningMsg = await $('.error');
                assert.notEqual(warningMsg, null, "");
                assert((await outOfStock.getText()).includes(this.outOfStockProduct), "The product is not a outOffStockProduct");


        });



}