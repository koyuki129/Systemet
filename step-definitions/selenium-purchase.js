let { $, sleep } = require('./funcs.js');
module.exports = function () {


    this.When(/^I press order button$/, async function () {
        this.totPrice = await $('.totPrice');

        this.totPrice = await this.totPrice.getText();
        this.totPrice = Number(this.totPrice);

        let checkoutButton = await $('.cart-page .checkout');
        assert.notEqual(checkoutButton, null, 'Could not find the checkout button');
        await checkoutButton.click();
    
      });

      this.Then(/^I should get a reciept that the products are bought including the total price paid$/, async function () {
          let reciept = await $('.reciept')
          reciept = await reciept.getText();
          assert(reciept.includes(this.totPrice), 'sum does not work');

      });

      this.Then(/^I should get a reciept that (\d+) products are bought including the total price paid$/, async function () {
        let reciept = await $('.reciept')
        reciept = await reciept.getText();
        assert(reciept.includes(this.totPrice), 'sum does not work');
        assert(reciept.includes(this.totPrice), 'sum does not work');

      });




      




}