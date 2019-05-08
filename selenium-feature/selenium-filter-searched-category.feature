Feature:
Som en användare vill jag kunna filtrera sökta produkter efter kategori

Scenario: Successfully able to filter searched products by category
Given that I am on the web page localhost:3000
And that I choose one category in the meny  
When I filter the products
Then I should be given a list of filtered products by category