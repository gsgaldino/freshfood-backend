import { IProduct } from '@/types';

type DefaultProductResponse = Promise<IProduct | null>;

export interface IProductRepository {
  save(product: IProduct): DefaultProductResponse;
  getById(id: string): DefaultProductResponse;
  getByName(name: string): DefaultProductResponse;
}
