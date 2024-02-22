//import { OrderController } from './controllers/orderController.js';
import { productController } from './controllers/productController.js';

document.addEventListener('DOMContentLoaded', () => {
    //const orderController = new OrderController();
    const productController = new productController();
    // Here you might want to call a method from orderController to initialize the display
    //orderController.displayOrders();
    productController.displayAllProducts();
});
// test