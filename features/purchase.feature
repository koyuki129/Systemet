Feature:
Som en användare vill jag kunna genomföra ett köp utan att registrera ett konto. 
(Betalning sker ej på riktigt), för att jag inte vill behöva bli kund på hemsidan.

Scenario: Successfully buy the products without registring an account
Given that there are products in the cart
When I buy the products
Then the products should be bought 