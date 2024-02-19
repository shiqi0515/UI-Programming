import { OrderController } from './controllers/orderController.js';

document.addEventListener('DOMContentLoaded', () => {
    const orderController = new OrderController();
    // Here you might want to call a method from orderController to initialize the display
    orderController.displayOrders();
});
