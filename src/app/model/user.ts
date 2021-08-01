import {Customer} from './customer';
import {Flower} from './flower';

export class User {
  userId: number;
  userName: string;
  password: string;
  customers: Customer[];
  flowers: Flower[];
}
