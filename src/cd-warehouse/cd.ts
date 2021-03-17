import {PaymentProvider} from "./paymentProvider";

export class CD {
    buy(paymentProvider: PaymentProvider): boolean {
        return paymentProvider.performPayment();
    }
}
