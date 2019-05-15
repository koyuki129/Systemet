let { $, sleep } = require('./funcs.js');
module.exports = function () {

    this.Given(/^that I seach and added one products to the cart$/, function () {
        let theButton = await $("#searchbutton");
        assert(theButton, "The #searchbutton doesn't exist");
        if (theButton) {
          await theButton.click();
          await sleep(1000);
        }
      });
      

} 