import {Accessories} from './accessories';
import {Order} from './order';
import {BouquetFlower} from './bouquetFlower';

export class Bouquet {
  bouquetId: number;
  bouquetPrice: number;
  quantity: number;
  accessories: Accessories;
  order: Order;
  bouquetFlowers: BouquetFlower[];
}
