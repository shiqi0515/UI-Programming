// Fake products data
const products = {
    beer: [
        { name: "Beer1", price: 39.9 },
        { name: "Beer2", price: 39.9 }
    ],
    wine: [
        { name: "Red Wine", price: 99.9 },
        { name: "White Wine", price: 89.9 }
    ],
    vodka: [
        { name: "Vodka1", price: 79.9 },
        { name: "Vodka2", price: 79.9 }
    ],
    whiskey: [
        { name: "Whiskey1", price: 79.9 },
        { name: "Whiskey2", price: 79.9 }
    ],
    cocktail: [
        { name: "Cocktail1", price: 89.9 },
        { name: "Cocktail2", price: 89.9 }
    ],
    soft_drink: [
        { name: "Cola", price: 19.9 },
        { name: "Spirit", price: 19.9 }
    ],
};

let cart = [];

function filterProducts(category) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clean the container

    const categoryProducts = products[category];
    categoryProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h4>${product.name}</h4>
            <p>Price: SEK ${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function addToCart(product) {
    cart.push(product);
    updateCart();
}

cart.forEach((item, index) => {
    total += item.price;
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
        <h4>${item.name}</h4>
        <p>Price: SEK ${item.price}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsContainer.appendChild(itemElement);
});

totalPriceElement.innerText = total.toFixed(2); // Update the total price


const categoryProducts = products[category];
categoryProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <h4>${product.name}</h4>
        <p>Price: SEK ${product.price}</p>
        <button class="add-to-cart-button" onclick="addToCart(${JSON.stringify(product).replace(/"/g, "&quot;")})">Add to cart</button>
    `;
    productContainer.appendChild(productElement);
});
