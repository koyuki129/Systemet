Feature: 
Som en användare vill jag kunna sortera sökta produkter efter namn (bokstavsordning).

Scenario: Successfully able to sort searched product in alphabetical order by name
Given that I am on the web page localhost:3000
And that I have a list of search results
When I press bokstavsordning button
Then the names of the products should be sorted in ascending alphabetical order