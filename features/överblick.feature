Feature: 
Som en användare vill jag kunna se en överblick på min varukorg/dess innehåll, 
för att få en bekräftelse på att jag valt rätt varor.

Scenario: Susccessfully overview the cart 
Given that I have added 1 products to the cart
When I enter the cart
Then that products should be visible in the cart