//Scenario nr 1: Successfully add quantity of products to the cart

 
module.exports = function(){

//Given that I am on the web page localhost:3000
this.Given(/^that I am on the web page localhost:(\d+)$/, async function (portNumber) {
     // not sure how to detect when we fail to load the page?
     await helpers.loadPage('https://localhost:' + portNumber );
    });


    //And that the products are available in the store
    this.Then(/^that the products are available in the store(\d+)$/,  function () {
    
    });

//When I add 2 units of the same products to the cart
this.When(/^I add (\d+) units of the same products to the cart$/, async function (products) {


  
});

//Then the products should be added to the cart
this.Then(/^the products should be added to the cart$/, function () {
    assert.equal(Product.products[100], cart.thingsToBuy[0].product);
});


}


//And the quantity of the products in the cart is 2

//this.Then(/^the quantity of the products in the cart is (\d+)$/, function (units) {
    // Write code here that turns the phrase above into concrete actions
    
  //});


    // Scenario nr 2: Successfully add quantity of products to the cart by adding it seperately 
   // And that the the products are available in the store 
   

      // this.Given(/^that the the products are available in the store$/, function () {
         // Write code here that turns the phrase above into concrete actions
        // callback();
       //});

// When I add 1 unit of the same products to the cart 
  

       //this.When(/^I add (\d+) unit of the same products to the cart$/, function () {
         // Write code here that turns the phrase above into concrete actions
         //callback();
      // });

// And I add 1 unit of the same products to the cart 
   

      // this.When(/^I add (\d+) unit of the same products to the cart$/, function () {
         // Write code here that turns the phrase above into concrete actions
         //callback();
       //});

// And I add 1 unit of the same products to the cart 
  

       //this.When(/^I add (\d+) unit of the same products to the cart$/, function () {
         // Write code here that turns the phrase above into concrete actions
         //callback();
      // });
// Then the products should be added to the cart 
  

       //this.Then(/^the products should be added to the cart$/, function () {
         // Write code here that turns the phrase above into concrete actions
         //callback();
       //});

// And the quantity of the products in the cart is 3 
    

        //this.Then(/^the quantity of the products in the cart is (\d+)$/, function () {
          // Write code here that turns the phrase above into concrete actions         
       // });

//Scenario nr 3: Should not be able to add 0 quantity of products to the cart 
    // And that the products are available in the store 
   

        //this.Given(/^that the products are available in the store$/, function
//() {
          // Write code here that turns the phrase above into concrete actions          
        //});
// When I add 0 unit of the products to the cart 
   

        //this.When(/^I add (\d+) unit of the products to the cart$/, function () {
          // Write code here that turns the phrase above into concrete actions          
        //});

// Then the products should not be added to the cart 
   

        //this.Then(/^the products should not be added to the cart$/, function () {
          // Write code here that turns the phrase above into concrete actions          
       // });