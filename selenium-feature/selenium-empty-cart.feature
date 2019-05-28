Feature: 
Som en användare vill jag kunna tömma hela min varukorg utifall att 
jag ändrar mig och vill köpa helt andra produkter alternativt ingenting alls.

Scenario: Successfully empty the cart with 1 products in the cart
Given that I am on the web page localhost:3000
And that there is 1 products in the cart
When I press empty cart button
Then the cart should not contain any products

Scenario: Successfully empty the cart with at least 2 products in the cart
Given that I am on the web page localhost:3000 
And that there is 2 products in the cart
When I press empty cart button
Then the cart should not contain any products

Scenario: Successfully empty the cart with at least 1000 products in the cart
Given  that I am on the web page localhost:3000 
And that there is 1000 products in the cart
When I press empty cart button
Then the cart should not contain any products


