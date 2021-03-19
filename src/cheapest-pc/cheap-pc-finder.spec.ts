import { CheapPcFinder } from './cheap-pc-finder';
import { Product } from './IProduct';

describe('CheapPcFinder', () => {
    const products: Product[] = [
        { name: 'Product OSX 14', price: 9.99, location: 'Utrecht' },
        { name: 'MS20 14', price: 4.99, location: 'Hilversum' },
    ];

    describe('find a pc', () => {
        products.forEach((product: Product) => {
            const cheapestPC = new CheapPcFinder();
            const findResult = cheapestPC.find([product]);

            it('should return ${product.name}', () => {
                expect(findResult.name).toEqual(product.name);
            });

            it('should return the price ${product.price}', () => {
                expect(findResult.price).toEqual(product.price);
            });

            it('should return the shipping location ${product.location}', () => {
                expect(findResult.location).toEqual(product.location);
            });
        });

        it('when given two products should return the cheapest', () => {
            const findResult = new CheapPcFinder().find(products);
            const cheapestProduct: Product = products[0];
            expect(findResult).toEqual(cheapestProduct);
        });
    });
});
