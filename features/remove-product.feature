Feature: 
Som en användare vill jag kunna ta bort en produkt från min varukorg
för att själv bestämma vad som ska köpas och inte.

Scenario: Successfully remove one products from the cart
Given that there is one products in the cart
When I remove the only product from the cart
Then the cart should not contain any products anymore

Scenario: Successfully remove products with two units from the cart
Given that there is two units of the same product in the cart
When I remove the only product from the cart
Then the cart should not contain any products anymore

Scenario: Successfully remove two products from the cart
Given that there is two different products in the cart
When I remove both of the products from the cart
Then the cart should not contain any products anymore

Scenario: Successfully remove one of two different products from the cart
Given that there is two different products in the cart
When I remove one of the two products from the cart
Then the cart should not contain the removed product anymore
