Feature:
Som en användare vill jag kunna lägga till produkter i min varukorg
för att senare kunna köpa produkterna jag valt.

Scenario: Successfully add products to the cart
Given that the products are available in the store
When I add the products to the cart
Then the products should be added to the cart

Scenario: Successfully add at least 2 diffrent products to the cart
Given that the the products are available in the store
When I add a products to the cart
And I can add another products to the cart 
Then the products should be added to the cart

Scenario: Out of products
Given that there is a product that is out of stock
When I try to add that product
Then the page should say "Out of products"