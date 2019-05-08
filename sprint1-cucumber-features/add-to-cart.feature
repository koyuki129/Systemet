Feature:
Som en användare vill jag kunna lägga till produkter i min varukorg
för att senare kunna köpa produkterna jag valt.

Scenario: Successfully add one product to the cart
Given that the products are available in the store
When I add one product to the cart
Then the product should be added to the cart

Scenario: Successfully add at least two different products to the cart
Given that the products are available in the store
When I add one product to the cart
And I add one other product to the cart
Then the two different products should be added to the cart

Scenario: Out of products
Given that there is a product that is out of stock
When I try to add that product
Then it should show a message 