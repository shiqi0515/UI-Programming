// Initialize an empty shopping cart array
let cart = [];

// Define an array of products with their categories, names, and prices
const products = [
    // ... (list of products)
];

// Function to filter and display products by category
function filterCategory(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear the products display

    // Filter products based on the selected category
    const filteredProducts = products.filter(product => product.category === category);

    // Iterate through filtered products and create elements for each
    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.textContent = `${product.name} - ${product.price}kr`;

        // Add an event handler to add the product to the cart when clicked
        div.onclick = function () { addToCart(product.name, product.price); };

        // Append the product element to the products display
        productsDiv.appendChild(div);
    });
}

// Function to display all products when the page is loaded
function displayAllProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear the products display

    // Iterate through all products and create elements for each
    products.forEach(product => {
        const div = document.createElement('div');
        div.textContent = `${product.name} - ${product.price}kr`;

        // Add an event handler to add the product to the cart when clicked
        div.onclick = function () { addToCart(product.name, product.price); };

        // Append the product element to the products display
        productsDiv.appendChild(div);
    });
}

// Show all products when the page is loaded
document.addEventListener('DOMContentLoaded', displayAllProducts);

// Function to add a product to the shopping cart
function addToCart(name, price) {
    const itemIndex = cart.findIndex(item => item.name === name);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1; // If the item exists in the cart, increase its quantity
    } else {
        cart.push({ name, price, quantity: 1 }); // If the item is not in the cart, add it as a new item
    }

    // Update the cart UI to reflect the changes
    updateCartUI();
}

// Function to update the shopping cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    // Iterate through items in the cart and create list items for each
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}kr x ${item.quantity}`;
        cartItems.appendChild(li);
    });

    // Update the total price in the UI
    updateTotalPrice();
}

// Function to update the total price in the UI
function updateTotalPrice() {
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('totalPrice').textContent = totalPrice;
}

// Function to clear the shopping cart
function clearCart() {
    cart = [];
    updateCartUI();
}

// Function to get and increment the order number from localStorage
function getOrderNumber() {
    let orderNumber = localStorage.getItem('orderNumber');

    if (!orderNumber) {
        orderNumber = '001';
    } else {
        let nextOrderNumber = parseInt(orderNumber) + 1;
        orderNumber = nextOrderNumber.toString().padStart(3, '0');
    }

    // Update and store the order number in localStorage
    localStorage.setItem('orderNumber', orderNumber);
    return orderNumber;
}

// Function to place an order
function placeOrder() {
    if (cart.length > 0) {
        const orderNumber = getOrderNumber();
        alert(`Order placed successfully. Your order number is ${orderNumber}`);
        clearCart();

        // Auto refresh the page after 3 seconds
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    } else {
        alert('Cart is empty. Please add items to your cart before placing an order.');
    }
}