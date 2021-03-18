import {PaymentProvider} from "./paymentProvider";

export class CD {
    private price: number;
    public stock: number;

    constructor(price: number, stock: number) {
        this.price = price;
        this.stock = stock;
    }

    buy(paymentProvider: PaymentProvider): number {
        if (paymentProvider.processPayment(this.price)) {
            return this.stock--;
        }
    }
}
