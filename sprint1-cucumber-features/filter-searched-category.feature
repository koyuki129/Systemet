Feature:
Som en användare vill jag kunna filtrera sökta produkter efter kategori

Scenario: Successfully able to filter searched products by category
Given that I have searched for a products by name
When I filter the products
Then I should be given a list of filtered products by category