import { CD } from './cd';
import { PaymentProvider } from './paymentProvider';

describe('CD Warehouse', () => {
    describe('buy a cd', () => {
        it('should reduce the stock by 1 when the payment provider accepts the payment', () => {
            const cd = new CD(5, 1);
            const paymentProvider = new PaymentProvider(true);
            cd.buy(paymentProvider);
            expect(cd.stock).toEqual(0);
        });

        it('should keep the stock the same if payment provider declines the payment', () => {
            const cd = new CD(4, 2);
            const paymentProvider = new PaymentProvider(false);
            cd.buy(paymentProvider);
            expect(cd.stock).toEqual(2);
        });
    });
});
