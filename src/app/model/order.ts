import {Customer} from './customer';
import {Bouquet} from './bouquet';

export class Order {
  orderId: number;
  deliveryPrice: number;
  description: string;
  requiredDelivery: boolean;
  orderDate: string;
  orderStatus: string;
  customer: Customer;
  bouquets: Bouquet[];
}
