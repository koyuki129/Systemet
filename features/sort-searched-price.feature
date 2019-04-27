Feature:
Som en användare vill jag kunna  sortera sökta produkter efter pris.

Scenario: Successfully able to sort searched product by price 
Given that I have a list of searched products
When I sort the products 
Then they should be sorted by price