let cart = [];
const products = [
    { category: 'Beer', name: 'Remmarlöv', price: 35 },
    { category: 'Beer', name: 'Carlsberg Hof', price: 39 },
    { category: 'Beer', name: 'Mariestads Export', price: 45 },
    { category: 'Red Wine', name: 'Bella de Día', price: 69 },
    { category: 'Red Wine', name: 'Marrenon', price: 85 },
    { category: 'Red Wine', name: 'Dandelion Vineyards', price: 95 },
    { category: 'White Wine', name: 'Lubanzi', price: 69 },
    { category: 'White Wine', name: 'Semente Avesso', price: 79 },
    { category: 'White Wine', name: 'Dark Horse', price: 79 },
    { category: 'Gin', name: 'Biostilla', price: 50 },
    { category: 'Gin', name: 'Tanqueray', price: 55 },
    { category: 'Gin', name: 'Beefeater', price: 55 },
    { category: 'Whiskey', name: 'Speyburn', price: 80 },
    { category: 'Whiskey', name: 'Tamnavulin', price: 80 },
    { category: 'Whiskey', name: 'Grant`s', price: 120 },
    { category: 'Vodka', name: 'Dworek Vodka', price: 50 },
    { category: 'Vodka', name: 'Koskenkorva Vodka', price: 50 },
    { category: 'Vodka', name: 'Absolut Vodka', price: 55 },
    { category: 'Cider', name: 'Briska', price: 45 },
    { category: 'Cider', name: 'Somersby', price: 45 },
    { category: 'Cider', name: 'Kopparberg Cider', price: 55 },
    { category: 'Alcoholfree', name: 'Skåne', price: 30 },
    { category: 'Alcoholfree', name: 'Roslags Äppelglögg', price: 40 },
    { category: 'Alcoholfree', name: 'Lyre`s American Malt', price: 50 },
    { category: 'Soft Drink', name: 'Cola', price: 30 },
    { category: 'Soft Drink', name: 'Spirit', price: 30 }
];

function filterCategory(category) {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear products
    const filteredProducts = products.filter(product => product.category === category);
    filteredProducts.forEach(product => {
        const div = document.createElement('div');
        div.textContent = `${product.name} - ${product.price}kr`;
        div.onclick = function () { addToCart(product.name, product.price); };
        productsDiv.appendChild(div);
    });
}

// Show all products
function displayAllProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = ''; // Clear products
    products.forEach(product => {
        const div = document.createElement('div');
        div.textContent = `${product.name} - ${product.price}kr`;
        div.onclick = function () { addToCart(product.name, product.price); };
        div.className = 'product-item'; // Implement CSS class
        productsDiv.appendChild(div);
    });
}

// Show all products when page is loaded
document.addEventListener('DOMContentLoaded', displayAllProducts);


function addToCart(name, price) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1; // If exists, increase quantity
    } else {
        cart.push({ name, price, quantity: 1 }); // Add new item to cart
    }
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price}kr x ${item.quantity}`;
        cartItems.appendChild(li);
    });
    updateTotalPrice();
}

function updateTotalPrice() {
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('totalPrice').textContent = totalPrice;
}

function clearCart() {
    cart = [];
    updateCartUI();
}

function getOrderNumber() {
    let orderNumber = localStorage.getItem('orderNumber');
    if (!orderNumber) {
        orderNumber = '001';
    } else {
        let nextOrderNumber = parseInt(orderNumber) + 1;
        orderNumber = nextOrderNumber.toString().padStart(3, '0');
    }
    localStorage.setItem('orderNumber', orderNumber);
    return orderNumber;
}

function placeOrder() {
    if (cart.length > 0) {
        const orderNumber = getOrderNumber();
        alert(`Success，your number is ${orderNumber}`);
        clearCart();
        setTimeout(() => {
            window.location.reload();
        }, 5000); // Auto refresh after 5 seconds
    } else {
        alert('Cart is empty！');
    }
}
