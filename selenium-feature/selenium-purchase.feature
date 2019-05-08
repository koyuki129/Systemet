Feature:
Som en användare vill jag kunna genomföra ett köp utan att registrera ett konto. 
(Betalning sker ej på riktigt), för att jag inte vill behöva bli kund på hemsidan.

Scenario: Successfully buy one product without having to register an account
Given that I am on the web page localhost:3000
And that there is one products in the cart
When I press order
Then the cart should show no object
And I should get a reciept that the products are bought including the total price paid

Scenario: Successfully buy two products without having to register an account
Given that I am on the web page localhost:3000
And that there is two different products in the cart
When I press order
Then the cart should show no object
And I should get a reciept that 2 products are bought including the total price paid