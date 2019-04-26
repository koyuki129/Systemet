Feature: 
Som en användare vill jag kunna sortera sökta produkter efter namn (bokstavsordning).

Scenario: Successfully able to sort searched product in alphabetical order by name
Given that I have searched for a products 
When I sort the products 
Then the names of the products should be sorted in alphabetical order 

