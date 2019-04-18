Feature: 
Som en användare vill jag kunna ta bort en produkt från min varukorg
för att själv bestämma vad som ska köpas och inte.

Scenario: Successfully remove 1 products from the cart
Given that there is 1 products in the cart
When I remove the only product from the cart
Then the cart should not contain any products anymore

Scenario: Successfully remove products with 2 units from the cart
Given that there is 2 units of the same product in the cart
When I remove that product from the cart
Then the cart should not contain any products anymore

Scenario: Successfully remove 2 products from the cart
Given that there is 2 different products in the cart
When I remove all of the products from the cart
Then the cart should not contain any products anymore

Scenario: Successfully remove 1 of 2 different products from the cart
Given that there is 2 different products in the cart
When I remove 1 of the products from the cart
Then the cart should not contain the removed product anymore