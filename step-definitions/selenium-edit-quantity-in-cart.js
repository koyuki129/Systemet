let { $, sleep } = require('./funcs.js');
module.exports = function () {



    this.Given(/^that there is one products with one unit in the cart$/, async function () {
        let searchBar = await $('.search #search');
        assert.notEqual(searchBar, null, 'Could not find the searchbar');
        await searchBar.sendKeys("Öl")

        let searchButton = await $('.searchbutton');
        assert.notEqual(searchButton, null, 'Could not find the search button');
        await searchButton.click();

        let add = await $('.search-page .add');
        assert.notEqual(add, null, 'Could not find the add button');
        if (Array.isArray(add) === true) {
            add = add[0];
        }

        await add.click()
    });


    this.When(/^I type in the quantity of the product to five units$/, async function () {

        let changeQuantity = await $('.cart-items .inputNumber');
        assert.notEqual(changeQuantity, null, 'Could not find the input box');

        driver.executeScript("$('.cart-items .inputNumber').val('')")
        await changeQuantity.sendKeys('5');
    });

    this.Then(/^the quantity of that product in the cart should be five$/, async function () {
        let changeQuantity = await $('.cart-items .inputNumber');

        assert(await changeQuantity.getAttribute('value') == "5", "expected value was not 5")
    });

    this.Given(/^that there is two products with one unit each in the cart$/, async function () {
        let searchBar = await $('.search #search');
        assert.notEqual(searchBar, null, 'Could not find the searchbar');
        await searchBar.sendKeys("Öl");

        let searchButton = await $('.searchbutton');
        assert.notEqual(searchButton, null, 'Could not find the search button');
        await searchButton.click();

        let add = await $('.search-page .add');
        assert.notEqual(add, null, 'Could not find the add button');
        if (Array.isArray(add) === true) {
            add = add[0];
        }

        await add.click();
        await searchBar.clear();
        await searchBar.sendKeys("gin");
        await searchButton.click();

        add = await $('.search-page .add');
        assert.notEqual(add, null, 'Could not find the add button');
        if (Array.isArray(add) === true) {
            add = add[0];
        }

        await add.click();
    });

    this.When(/^I type in the quantity for one of the products by one$/, async function () {

        let changeQuantity = await $('.cart-items .inputNumber');

       

        driver.executeScript("$('.cart-items .inputNumber').eq(0).val('')")
        await changeQuantity[0].sendKeys('2');
        driver.executeScript("$('.cart-items .inputNumber').eq(1).val('')")
        try {
            changeQuantity = await $('.cart-items .inputNumber');
        } catch(e) {}
        try {
            await changeQuantity[1].sendKeys('1');
        } catch(e) {}
    });

    this.Then(/^the quantity of that product in the cart should be two and the other still one$/, async function () {
        let changeQuantity = await $('.cart-items .inputNumber');
        assert(await changeQuantity[0].getAttribute('value') == "2", "expected value was not 2")
        assert(await changeQuantity[1].getAttribute('value') == "1", "expected value was not 1")
    });

    this.When(/^I raise the quantity for one of the products by one$/, async function () {

    });

}