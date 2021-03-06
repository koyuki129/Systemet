Feature: 
Som en användare vill jag kunna se en överblick på min varukorg/dess innehåll, 
för att få en bekräftelse på att jag valt rätt varor.

Scenario: Successfully overview the cart of products
Given that I am on the web page localhost:3000
And that I search and added one products to the cart
When I press on the cart to see the overview
Then I will see the product in the cart

Scenario: Successfully overview the cart of at least 2 different products
Given that I am on the web page localhost:3000
And that there is two different products in the cart
When I press on the cart to see the overview
Then I will see the products in the cart

Scenario: Successfully overview the price of the products
Given that I am on the web page localhost:3000
And that I search and added products to the cart
When I press on the cart to see the overview
Then show the total price of products in the cart 
