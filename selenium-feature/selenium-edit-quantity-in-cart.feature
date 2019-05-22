Feature: 
Som en användare vill jag kunna justera kvantiteten 
av en produkt i min varukorg för eventuellt senare ändringar

Scenario: Successfully edit quantity of one products in the cart
Given that I am on the web page localhost:3000
And that there is one products with one unit in the cart
When I type in the quantity of the product to five units 
Then the quantity of that product in the cart should be five

Scenario: Successfully edit unit quantity of two products in the cart
Given that I am on the web page localhost:3000
And that there is two products with one unit each in the cart
When I type in the quantity for one of the products by one
Then the quantity of that product in the cart should be two and the other still one

