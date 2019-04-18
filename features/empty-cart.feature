Feature: 
Som en användare vill jag kunna tömma hela min varukorg utifall att 
jag ändrar mig och vill köpa helt andra produkter alternativt ingenting alls.

Scenario: Successfully empty the whole cart
Given that there is at least 1 products in the cart
When I remove all the elements from the cart
Then the cart should not contain any products