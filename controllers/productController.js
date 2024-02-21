class ProductController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.productsDiv = document.getElementById('products');
        this.sidebar = document.getElementById('sidebar');
        this.cartItemsDiv = document.getElementById('cartItems');
        this.totalPriceDiv = document.getElementById('totalPrice');
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.displayAllProducts();
            this.generateCategories();
        });
    }

    displayAllProducts() {
        const products = this.model.sortProductsByName();
        this.view.displayProducts(this.productsDiv, products, this.addToCart.bind(this));
    }

    filterCategory(category) {
        const filteredProducts = this.model.filterByCategory(category);
        this.view.displayProducts(this.productsDiv, filteredProducts, this.addToCart.bind(this));
    }

    generateCategories() {
        const categories = Array.from(new Set(this.model.products.map(product => product.category))).sort((a, b) => a.localeCompare(b));
        this.view.displayCategories(this.sidebar, categories, this.filterCategory.bind(this));
    }

    addToCart(name, price) {
        this.model.addToCart(name, price);
        this.updateCartUI();
    }

    updateCartUI() {
        const cart = this.model.getCart();
        this.view.updateCartUI(this.cartItemsDiv, cart);
        this.updateTotalPrice();
    }

    updateTotalPrice() {
        const totalPrice = this.model.getCart().reduce((acc, item) => acc + (item.price * item.quantity), 0);
        this.view.displayTotalPrice(this.totalPriceDiv, totalPrice);
    }

    placeOrder() {
        if (this.model.getCart().length > 0) {
            const orderNumber = this.model.updateOrderNumber();
            this.view.displayOrderConfirmation(orderNumber);
            this.model.clearCart();
            this.updateCartUI();
            setTimeout(() => this.view.reloadPage(), 3000);
        } else {
            this.view.displayCartEmptyWarning();
        }
    }
}
