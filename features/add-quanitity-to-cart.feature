Feature:
Som en användare vill jag lägga till olika kvantiteter av en produkt 
i min varukorg för att kunna välja olika mängder av en produkt.

Scenario: Successfully add quantity of products to the cart
Given that the products are available in the store
When I add two units of the same products to the cart
Then the products should be added to the cart
And the quantity of the products in the cart is two

Scenario: Successfully add quantity of products to the cart by adding it seperately
Given that the the products are available in the store
When I add one unit of the same products to the cart
And I add one unit of the same products to the cart
And I add one unit of the same products to the cart
Then the products should be added to the cart
And the quantity of the products in the cart is three