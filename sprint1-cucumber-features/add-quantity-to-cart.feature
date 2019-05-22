Feature:
Som en användare vill jag lägga till olika kvantiteter av en produkt 
i min varukorg för att kunna välja olika mängder av en produkt.

Scenario: Successfully add quantity of products to the cart
Given that the products are available in the store
When I add 2 units of the same products to the cart
Then the products should be added to the cart
And the quantity of the products in the cart is 2

Scenario: Successfully add quantity of products to the cart by adding it seperately
Given that the products are available in the store
When I add 1 unit of the same products to the cart
And I add 1 unit of the same products to the cart
And I add 1 unit of the same products to the cart
Then the products should be added to the cart
And the quantity of the products in the cart is 3

Scenario: Should not be able to add 0 quantity of products to the cart
Given that the products are available in the store
When I add 0 unit of the products to the cart
Then the products should not be added to the cart