Feature:
Som en användare vill jag lägga till olika kvantiteter av en produkt 
i min varukorg för att kunna välja olika mängder av en produkt.

Scenario: Successfully add quantity of products to the cart
Given that I am on the web page localhost:3000
And that the products are available in the store
When I add 2 units of the same products to the cart
Then the products should be added to the cart
And the quantity of the products in the cart is 2 

Scenario: Successfully add quantity of products to the cart by adding it seperately
Given that I am on the web page localhost:3000
When I add three units of the same products to the cart by adding them separately
Then the products should be added to the cart
And the quantity of the products in the cart is three

Scenario: Should not be able to add 0 quantity of products to the cart
Given that I am on the web page localhost:3000
And that the products are available in the store
When I add 0 units of the same products to the cart
Then the products should not be added to the cart