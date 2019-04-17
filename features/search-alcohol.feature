Feature:
Som en användare vill jag kunna söka efter produkter 
för att hitta det jag letar efter.

Scenario: Successfully search products by name
Given that I am searching by name
When I search for the partial name of a product
Then I should be given a list of names that matches the name

Scenario: Successfully search products by namn2
Given that I am searching by namn2
When I search for the partial namn2 of a product
Then I should be given a list of names that matches the namn2

Scenario: Successfully search products by varnummer
Given that I am searching by varunmmer
When I search for the complete varnummer
Then I should be given a list with the product that matches the varnummer





