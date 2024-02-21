class productView {
    displayProducts(productsDiv, products, clickAction) {
        productsDiv.innerHTML = '';
        products.forEach(product => {
            const div = document.createElement('div');
            div.textContent = `${product.name} - ${product.price}kr`;
            div.onclick = () => clickAction(product.name, product.price);
            productsDiv.appendChild(div);
        });
    }

    displayCategories(sidebar, categories, clickAction) {
        sidebar.innerHTML = '';
        categories.forEach(category => {
            const listItem = document.createElement('li');
            listItem.textContent = category;
            listItem.onclick = () => clickAction(category);
            sidebar.appendChild(listItem);
        });
    }

    updateCartUI(cartItemsDiv, cart) {
        cartItemsDiv.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}kr x ${item.quantity}`;
            cartItemsDiv.appendChild(li);
        });
    }

    displayTotalPrice(totalPriceDiv, totalPrice) {
        totalPriceDiv.textContent = totalPrice;
    }

    displayOrderConfirmation(orderNumber) {
        alert(`Order placed successfully. Your order number is ${orderNumber}`);
    }

    displayCartEmptyWarning() {
        alert('Cart is empty. Please add items to your cart before placing an order.');
    }

    reloadPage() {
        window.location.reload();
    }
}
