import {User} from './user';
import {Order} from './order';

export class Customer {
  customerId: number;
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  facebookAcc: string;
  address: string;
  user: User;
  orders: Order[];
}
