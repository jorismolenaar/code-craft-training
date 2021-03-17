import {Item} from './item';

export class ShoppingBasket {
  private readonly items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  public total(): number {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.map(item => item.subtotal()).reduce((subtotal, price) => subtotal + price);
  }
}


