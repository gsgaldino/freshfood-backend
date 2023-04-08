import { Category } from './category';

export interface IProduct {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: Category;
}
