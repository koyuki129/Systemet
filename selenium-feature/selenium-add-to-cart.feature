Feature:
Som en användare vill jag kunna lägga till produkter i min varukorg
för att senare kunna köpa produkterna jag valt.

Scenario: Successfully add one product to the cart
Given that I am on the web page localhost:3000
And that the products are available in the store
When I add on product to the cart
Then i should see the product in the cart

Scenario: Successfully add at least two different products to the cart
Given that I am on the web page localhost:3000
And that the products are available in the store
When I add on product to the cart
And I add one other product to the cart
Then I should see the products in the cart

Scenario: Out of products
Given that I am on the web page localhost:3000
Given I add one product that is out of stock to the cart
Then the page should show a message 