export class OrderModel {
    constructor() {
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
        this.onOrderChanged(this.orders);
    }

    bindOrderChanged(callback) {
        this.onOrderChanged = callback;
    }
}
