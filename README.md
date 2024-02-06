# UI-Programming
We need three basic pages:
1. Home page: For VIP user to login, regular user can just skip
2. Menu page: For all user to choose products and make order. VIP can pay on this page
3. Bartender page: As a admin, bartender can add, change, delete order.

Extra rules:
1. When VIPs pay, they can choose whether pick by themselves at VIP fridge or serve to table. So they can enter their table number if they wanna serve to table.
2. When VIPs make order, their order should be immediately set to the second position of the order sequence.
3. Regular customer can only pay at bar, and pick drinks by themselves.

Problems:
1. Didn't figure out how to use beers_bought, beers_sold and payments JSON files. Is it possible for use to just create some fake data just for testing?

Personal contribution:
Shiqi:
1. Completed the design of CSS, HTML and JavaScript files for the Home page. Completed page jump, and successfully applied dutchman_table_users.json to JS to make success VIP login.
2. Completed the design of CSS, HTML and JavaScript files for the Menu page. Completed classify goods according to different categories, automatically laid out the page according to the number of products, successfully applied dutchman_table_sbl_beer.json to show Name and price in page, completed add products to cart, empty cart and order function.