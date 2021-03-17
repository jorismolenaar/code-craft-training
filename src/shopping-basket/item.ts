export class Item {
  private readonly price: number;
  private readonly quantity: number;

  constructor(price: number, quantity: number) {
    this.price = price;
    this.quantity = quantity;
  }

  public getPrice(): number {
    return this.price;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public subtotal(): number {
    return this.price * this.quantity;
  }
}
