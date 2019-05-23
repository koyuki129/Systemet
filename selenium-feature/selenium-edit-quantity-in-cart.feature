Feature: 
Som en användare vill jag kunna justera kvantiteten 
av en produkt i min varukorg för eventuellt senare ändringar

Scenario: Successfully edit quantity of one products in the cart
Given that I am on the web page localhost:3000
And that there is one products with one unit in the cart
When I type in the quantity of the product to five units 
Then the quantity of that product in the cart should be five

Scenario: Successfully edit unit quantity of two products in the cart
Given that I am on the web page localhost:3000
And that there is two products with one unit each in the cart
When I type in the quantity for one of the products by one
Then the quantity of that product in the cart should be two and the other still one

Scenario: Successfully raise quantity of one products in the cart
Given that I am on the web page localhost:3000
And that there is one products with one unit in the cart
When I raise the quantity for that product by one
Then the quantity of that product in the cart should be 2

Scenario: Successfully raise unit quantity of two products in the cart
Given that I am on the web page localhost:3000
And that there is two products with one unit each in the cart
When I raise the quantity for one of the products by one
Then the quantity of that product in the cart should be two and the other still one

Scenario: Successfully lower unit quantity of products in the cart
Given that I am on the web page localhost:3000
And that there is one products with one unit in the cart
When I lower the quantity of that product by one
Then the quantity of that product in the cart should still be one

Scenario: Successfully lower unit quantity of two products in the cart
Given that I am on the web page localhost:3000
And that there is two products with one unit each in the cart
When I lower the quantity for one of the products by one
Then the quantity of that product in the cart should be one and the other still one

Scenario Outline: Make sure you can't edit quantity to a number less than one (not <quantity>)
Given that I am on the web page localhost:3000
And that there is one products with one unit in the cart
When I edit the quantity for that product to the value <quantity>
Then the quantity becomes 1

Examples:
| quantity |
| 0        |
| -5       |
| -500     |
| 0.75     |

