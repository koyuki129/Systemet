Feature:
Som en användare vill jag kunna  sortera sökta produkter efter pris.

Scenario: Successfully able to sort searched product by price 
Given that I am on the web page localhost:3000
And that I have a list of searched products
When I press sort the products by price
Then they should be sorted by price