Feature: 
Som en användare vill jag kunna justera kvantiteten 
av en produkt i min varukorg för eventuellt senare ändringar

Scenario: Successfully raise quantity of products in the cart
Given that there is 1 products with 1 unit in the cart
When I raise the quantity for that product by 1
Then the quantity of that product in the cart should be 2

Scenario: Successfully raise unit quantity of 2 products in the cart
Given that there is 2 products with 1 unit each in the cart
When I raise the quantity for one of the products by 1
Then the quantity of that product in the cart should be 2 and the other still 1

Scenario: Successfully lower unit quantity of products in the cart
Given that there is 1 products with 1 unit in the cart
When I lower the quantity of that product by 1
Then the quantity of that product in the cart should still be 1


