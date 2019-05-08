Feature:
Som en användare vill jag kunna stänga ner min webbläsare och 
öppna upp den igen med samma varukorg. 
För att jag inte vill förlora mina varor jag valt, 
ifall att det skulle inträffa ett fel på min dator.

Scenario: Successfully able to open the same cart 
Given that there is at least one products in the cart
When I close the browser
And reopen the browser
Then I should be able to open the same cart with the selected products

Scenario: Successfully able to get all the selected products in the cart
Given that there is at least 1 products in the cart
When I refresh the browser
Then I should be able to open the same cart with the selected products
  


