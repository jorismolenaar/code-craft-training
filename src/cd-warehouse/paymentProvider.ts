export class PaymentProvider {
    private readonly payment: boolean;

    constructor(payment: boolean) {
        this.payment = payment;
    }

    processPayment(price: number): boolean {
    return this.payment;
  }
}
