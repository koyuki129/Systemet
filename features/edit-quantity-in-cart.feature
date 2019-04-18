Feature: 
Som en användare vill jag kunna justera kvantiteten 
av en produkt i min varukorg för eventuellt senare ändringar

Scenario: Successfully edit quantity of products in the cart
Given that there is 1 products in the cart
When I edit the number of units for a product
Then the cart should remember the new number of units for that product

Scenario: Successfully edit quantity of at least 2 products in the cart
Given that there is at least 2 products in the cart
When I edit the number of units for a product
Then the cart should remember the new number of units for that product

