export class OrderView {
    constructor() {
        this.app = this.getElement('#root');
        this.form = this.createElement('form');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.submitButton = this.createElement('button');
        this.submitButton.textContent = 'Add Order';
        this.form.append(this.input, this.submitButton);

        this.orderList = this.createElement('ul', 'order-list');
        this.app.append(this.form, this.orderList);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }

    displayOrders(orders) {
        // Delete all nodes
        while (this.orderList.firstChild) {
            this.orderList.removeChild(this.orderList.firstChild);
        }

        // Show default message
        if (orders.length === 0) {
            const p = this.createElement('p');
            p.textContent = 'No orders yet. Place an order!';
            this.orderList.append(p);
        } else {
            // Create nodes
            orders.forEach(order => {
                const li = this.createElement('li');
                li.textContent = order;
                this.orderList.append(li);
            });
        }
    }

    bindAddOrder(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();

            if (this.input.value) {
                handler(this.input.value);
                this.input.value = '';
            }
        });
    }
}


