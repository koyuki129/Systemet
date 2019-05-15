/*let { $, sleep } = require('./funcs.js');

module.exports = function () {
    this.Given(/^that there is (\d+) products in the cart$/, async function (numberOfProductsInCart) {
        for (let i = 0; i < numberOfProductsInCart; i++) {
            let searchBar = await $('.search #search');
            let add = await $('.search-page .add');
            await searchBar.sendKeys();
            await add.click();
        }
    });

    this.When(/^I press empty cart button$/, async function () {
        let emptyCartButton = await $('.cart-page .emptyCart');
        assert.notEqual(emptyCartButton, null, 'Could not find the emptyCart button');
        await emptyCartButton.click();
    });

    this.Then(/^the cart should not contain any products$/, async function () {
        let cartItems = await $('.cart-items *');
        assert(cartItems == null, "Cart is not empty");
    });
}*/