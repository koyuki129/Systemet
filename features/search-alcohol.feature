Feature:
Som en användare vill jag kunna söka efter produkter 
för att hitta det jag letar efter.

Scenario: Successfully search products by name
Given that I am searching by a partial name
When I search
Then I should be given a list of products with names that matches the name

Scenario: Successfully search products by namn2
Given that I am searching by a partial namn2
When I search
Then I should be given a list of products with names that matches the namn2

Scenario: Successfully search products by varnummer
Given that I am searching by a complete varnmmer
When I search
Then I should be given a list with the product that matches the varnummer





