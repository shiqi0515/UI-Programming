export class productModel {
    constructor(products) {
        this.products = products;
        this.cart = [];
    }

    filterByCategory(category) {
        return this.products.filter(product => product.category === category);
    }

    sortProductsByName() {
        return [...this.products].sort((a, b) => a.name.localeCompare(b.name));
    }

    addToCart(name, price) {
        const itemIndex = this.cart.findIndex(item => item.name === name);
        if (itemIndex > -1) {
            this.cart[itemIndex].quantity += 1;
        } else {
            this.cart.push({ name, price, quantity: 1 });
        }
    }

    getCart() {
        return this.cart;
    }

    clearCart() {
        this.cart = [];
    }

    updateOrderNumber() {
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
}
