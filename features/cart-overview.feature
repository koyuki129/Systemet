Feature: 
Som en användare vill jag kunna se en överblick på min varukorg/dess innehåll, 
för att få en bekräftelse på att jag valt rätt varor.

Scenario: Susccessfully overview the cart of products
Given that I have added products to the cart
When I enter the cart
Then that products should be visible in the cart

Scenario: Susccessfully overview the cart of at lest 2 products
Given that I have added 2 different products to the cart
When I enter the cart
Then the products should be visible in the cart

Scenario: Susccessfully overview the price of the products
Given that I have added products to the cart
When I enter the cart
Then show the total price of products in the cart 
