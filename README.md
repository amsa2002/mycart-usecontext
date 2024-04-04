Shopping Cart Application with ContextAPI

This is a simple shopping cart application built using React and ContextAPI. The application fetches product data from a JSON source and allows users to add items to the cart, adjust quantities, and view the total quantity and amount.

Functionalities:-
Fetching Product Data: The application fetches product data from a JSON source.

Cart Page: The cart page displays each item with its price, quantity, total quantity, and total amount.

Adjust Quantity: Users can increase or decrease the quantity of each item, which automatically updates the total quantity and amount.

Technologies Used:-
React
ContextAPI

Implementation Details:-
ShopContext.js: Defines a context for managing the state of the shopping cart. It provides functions for adding/removing items from the cart and calculating total quantity and amount.

NavBar.js: Displays navigation links.

ProductList.js: Displays a list of products fetched from the JSON source. Allows users to click on a product to view its details.

ProductDisplay.js: Displays the details of a selected product. Users can add the product to the cart from this page.

App.js: The main component that renders other components within the application.

index.js: The entry point of the application.