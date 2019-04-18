Feature:
Som en användare vill jag kunna genomföra ett köp utan att registrera ett konto. 
(Betalning sker ej på riktigt), för att jag inte vill behöva bli kund på hemsidan.

Scenario: Successfully buy 1 product without having to register an account
Given that there is 1 products in the cart
When I buy the products
Then the cart should be empty
And I should get the confirmation that the products are bought

Scenario: Successfully buy 2 products without having to register an account
Given that there are 2 products in the cart
When I buy the products
Then the cart should be empty
And I should get the confirmation that 2 products are bought
