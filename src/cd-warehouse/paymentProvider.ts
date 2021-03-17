export class PaymentProvider {
    private readonly payment: boolean;

    constructor(payment: boolean) {
        this.payment = payment;
    }

    performPayment(): boolean {
    return this.payment;
  }
}
