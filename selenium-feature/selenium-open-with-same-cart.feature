Feature:
Som en användare vill jag kunna stänga ner min webbläsare och 
öppna upp den igen med samma varukorg. 
För att jag inte vill förlora mina varor jag valt, 
ifall att det skulle inträffa ett fel på min dator.

Scenario: Successfully able to open the same cart 
Given that I am on the web page localhost:3000
When I add one product to the cart
And I go to a new site
And I go back to my web page
Then I should be able to open the same cart as before it closed and reopened the browser



