import { CD } from './cd';
import { PaymentProvider } from './paymentProvider';

describe('CD', () => {
    describe('buy', () => {
        it('should return payment successful if payment provider accepts the payment', () => {
            const cd = new CD();
            const dummyPaymentSuccess = new PaymentProvider(true);
            expect(cd.buy(dummyPaymentSuccess)).toEqual(true);
        });

        it('should return payment unsuccessful if payment provider declines the payment', () => {
            const cd = new CD();
            const dummyPaymentFail = new PaymentProvider(false);
            expect(cd.buy(dummyPaymentFail)).toEqual(false);
        });
    });
});
