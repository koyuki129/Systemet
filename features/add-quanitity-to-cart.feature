Feature:
Som en användare vill jag lägga till olika kvantiteter av en produkt 
i min varukorg för att kunna välja olika mängder av en produkt.

Scenario: Successfully add quantity of products to the cart
Given that the products are available in the store
When I add at least two units of the same products to the cart
Then the products should be added to the cart
And I can see the quantity of the products added to the cart

Scenario: Successfully add quantity of products to the cart by adding it seperately
Given that the the products are available in the store
When I add at least one unit of the same products to the cart
And add two units of the same products to the cart again
Then the products should be added to the cart
And I can see the quantity of the products added to the cart