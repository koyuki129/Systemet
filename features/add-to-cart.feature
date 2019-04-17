Feature:
Som en användare vill jag kunna lägga till produkter i min varukorg
för att senare kunna köpa produkterna jag valt.

Scenario: Successfully add products to the cart
Given that the the products are available in the store
When I add the products to the cart
Then the products should be added to the cart