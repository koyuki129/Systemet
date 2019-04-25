Feature: 
Som en användare vill jag kunna justera kvantiteten 
av en produkt i min varukorg för eventuellt senare ändringar

Scenario: Successfully raise quantity of one products in the cart
Given that there is one products with one unit in the cart
When I raise the quantity for that product by one
Then the quantity of that product in the cart should be two

Scenario: Successfully raise unit quantity of two products in the cart
Given that there is two products with one unit each in the cart
When I raise the quantity for one of the products by one
Then the quantity of that product in the cart should be two and the other still one

Scenario: Successfully lower unit quantity of products in the cart
Given that there is one products with one unit in the cart
When I lower the quantity of that product by one
Then the quantity of that product in the cart should still be one


