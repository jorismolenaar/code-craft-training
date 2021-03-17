import {ShoppingBasket} from './shopping-basket';
import {Item} from './item';

describe('ShoppingBasketTest', () => {

  it('should return the empty basket', () => {
    const basket = new ShoppingBasket([]);
    expect(basket.total()).toEqual(0);
  });

  [100, 50].forEach((price) => {
    it(`should return ${price} total for basket with single item of price ${price}`, () => {
      const basket: ShoppingBasket = new ShoppingBasket([new Item(price, 1)]);
      expect(basket.total()).toEqual(price);
    });
  });

  it('should return the total of multiple items', () => {
    const basket: ShoppingBasket = new ShoppingBasket([new Item(100, 1), new Item(50, 1)]);
    expect(basket.total()).toEqual(150);
  });

  it('should return the total for a quantity more than 1', () => {
    const basket: ShoppingBasket = new ShoppingBasket([new Item(100, 2), new Item(50, 1)]);
    expect(basket.total()).toEqual(250);
  });
});
