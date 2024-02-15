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
1. Didn't figure out how to use beers_bought, beers_sold and payments JSON files.

What to do?
1. Create Bartender page.
2. Transfor order detailed data from Menu page to Bartender page.
3. Create automatic order sequence.
4. Undo/Redo for adding items to cart
5. Add sort/filter options

Personal contribution:
Shiqi Shu:
1. For Home page:
    1.1 Completed the design of CSS, HTML and JavaScript files for the Menu page.
    1.2 Successfully applied dutchman_table_users.json to JS to make success VIP login.
    1.3 Implement page jump to Menu page.
2. For Menu page:
    2.1 Completed the design of CSS, HTML and JavaScript files for the Menu page.
    2.2 Completed classify goods according to different categories, automatically laid out the page according to the number of products.
    2.3 Successfully applied dutchman_table_sbl_beer.json to show Name and price in page(Just pick around 150 items).
    2.4 Completed categories and products are sorted by initials.
    2.5 Completed add products to cart and empty cart.
    2.6 Change button and functions for VIP customer to Pay.
    2.7 Provice two methods for VIP to pay. If choose Self service then will generate Random four-digit password to open the fridge. If choose Table service then will required to input table number.

Tips:
1. You can use your first name and default password '123456' to log in as a VIP customer.