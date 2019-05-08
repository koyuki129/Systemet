Feature:
Som en användare vill jag kunna genomföra ett köp utan att registrera ett konto. 
(Betalning sker ej på riktigt), för att jag inte vill behöva bli kund på hemsidan.

Scenario: Successfully buy one product without having to register an accountz
Given that there is one products in the cart
When I checkout
Then the cart should be emptied
And I should get the confirmation that the products are bought including the total price paid

Scenario: Successfully buy two products without having to register an account
Given that there is two different products in the cart
When I checkout
Then the cart should be emptied
And I should get the confirmation that 2 products are bought including the total price paid
