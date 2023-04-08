import { Category } from '@/types';

export interface ICreateProductDTO {
  name: string;
  description?: string;
  price: number;
  category: Category;
  quantity: number;
}
