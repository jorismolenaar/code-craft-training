import {Product} from "./IProduct";

export class CheapPcFinder {
    find(products: Product[]) {
        return products.sort((a, b) => a.price - b.price)[0];
    }
}
