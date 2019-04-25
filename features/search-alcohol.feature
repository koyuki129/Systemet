Feature:
Som en användare vill jag kunna söka efter produkter 
för att hitta det jag letar efter.

Scenario: Successfully search products by the value of the property "namn"
Given that I am searching by "a partial" value of the property "namn"
When I search
Then I should be given a list of products that matches my search

Scenario: Successfully search products by the value of the property "namn2"
Given that I am searching by "a partial" value of the property "namn2"
When I search
Then I should be given a list of products that matches my search

Scenario: Successfully search products by the value of the property "varnummer"
Given that I am searching by "the full" value of the property "varnummer"
When I search
Then I should be given a list of products that matches my search





