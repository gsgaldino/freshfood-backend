import { IProduct } from './product';

export interface ILocalProducer {
  name: string;
  address: string;
  products: IProduct[];
  email: string;
}
