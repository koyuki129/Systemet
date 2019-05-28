let { $, sleep } = require('./funcs.js');

module.exports = function () {

    this.Given(/^that there is (\d+) products in the cart$/, async function (numberOfProductsInCart) {
        let searchBar = await $('.search #search');
        assert.notEqual(searchBar, null, 'Could not find the searchbar');
        await searchBar.sendKeys("a");

        let searchButton = await $('.search .searchbutton');
        assert.notEqual(searchButton, null, "Could not find the search button");
        await searchButton.click();
        


        //if we are adding the same product with different quantities 
        // add = add[0]; 

        //if we are adding different products
        let leftToClick = numberOfProductsInCart;
        while(leftToClick > 0){
            let add = await $('.search-page .add');
            assert.notEqual(add, null, 'Could not find the add button');
            for (btn of add) {
                await btn.click();
                leftToClick--;
                if(leftToClick < 1){ break; }
            }
            // switch to the next page
            if(leftToClick){
                let nextPageBtn = await $('.next-search-page');
                await nextPageBtn.click();
            }
            await sleep(500);
        }
    });

    this.When(/^I press empty cart button$/, async function () {
        let emptyCartButton = await $('.cart-page .emptycart');
        assert.notEqual(emptyCartButton, null, 'Could not find the emptycart button');
        await emptyCartButton.click();
    });

    this.Then(/^the cart should not contain any products$/, async function () {
        let cartItems = await $('.cart-items.table td');
        assert(cartItems === null, "Cart is not empty");
    });
}
