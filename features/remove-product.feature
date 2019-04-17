Feature: 
Som en användare vill jag kunna ta bort en produkt från min varukorg
för att själv bestämma vad som ska köpas och inte.

Scenario: Successfully remove products from the cart
Given that there is at least 2 different products in the cart
When I remove one of the products from the cart
Then the cart should not contain that product anymore