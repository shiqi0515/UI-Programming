// 假设的商品数据，实际情况下你可能会从服务器获取
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
    productContainer.innerHTML = ''; // 清空现有内容

    const categoryProducts = products[category];
    categoryProducts.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h4>${product.name}</h4>
            <p>价格: ￥${product.price}</p>
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
        <p>价格: ￥${item.price}</p>
        <button onclick="removeFromCart(${index})">移除</button>
    `;
    cartItemsContainer.appendChild(itemElement);
});

totalPriceElement.innerText = total.toFixed(2); // 更新总价


const categoryProducts = products[category];
categoryProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <h4>${product.name}</h4>
        <p>价格: ￥${product.price}</p>
        <button class="add-to-cart-button" onclick="addToCart(${JSON.stringify(product).replace(/"/g, "&quot;")})">加入购物车</button>
    `;
    productContainer.appendChild(productElement);
});
