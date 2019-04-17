Feature:
Som en användare vill jag kunna söka efter produkter 
för att hitta det jag letar efter.

Scenario: Successfully search products by name
Given that the partial name exists in the certain name 
When I search
Then i should be given a list of names that matches the name

Scenario: Successfully search products by second name
Given that the partial name exists in the certain name 
When I search
Then i should be given a list of names that matches the name

Scenario: Successfully search products by store number
Given that the certain number exists
When I search
Then i should be given a list of names that matches the number





