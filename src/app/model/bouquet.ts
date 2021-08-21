
import {Order} from './order';
import {BouquetFlower} from './bouquetFlower';

export class Bouquet {
  bouquetId: number;
  description: string;
  bouquetPrice: number;
  primeCost: number;
  quantity: number;
  accessoriesPrice: number;
  order: Order;
  bouquetFlowers: BouquetFlower[];
}
