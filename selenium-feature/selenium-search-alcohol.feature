Feature:
Som en användare vill jag kunna söka efter produkter 
för att hitta det jag letar efter.

Scenario: Successfully search products by the value of the property "namn"
Given that I am on the web page localhost:3000
And that I am searching for "Glen"
When I press search button
Then I should be given a list of products that matches "Glen"

Scenario: Successfully search products by the value of the property "namn2"
Given that I am on the web page localhost:3000
And that I am searching for "Riesling"
When I press search button
Then I should be given a list of products that matches "Riesling"

Scenario: Successfully search products by the value of the property "varnummer"
Given that I am on the web page localhost:3000
And that I am searching for 86797
When I press search button
Then I should be given a list of products that matches 86797
