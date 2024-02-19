import { OrderModel } from '../models/orderModel.js';
import { OrderView } from '../views/orderView.js';
export class OrderController {
    constructor(model, view) {
        this.model = new OrderModel;
        this.view = new OrderView;

        // Display initial orders
        this.onOrderListChanged(this.model.orders);

        // Bind view listeners
        this.view.bindAddOrder(this.handleAddOrder);

        // Bind model listeners
        this.model.bindOrderChanged(this.onOrderListChanged);
    }

    onOrderListChanged = orders => {
        this.view.displayOrders(orders);
    };

    handleAddOrder = order => {
        this.model.addOrder(order);
    };
}
