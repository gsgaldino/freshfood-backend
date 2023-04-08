import { IProduct } from '@/types';
import { Product } from '@/models';
import { IProductRepository } from './IProductRepository';

export class ProductRepository implements IProductRepository {
  async save(product: IProduct): Promise<IProduct | null> {
    return await Product.create(product);
  }
  async getById(id: string): Promise<IProduct | null> {
    return await Product.findById(id);
  }
  async getByName(name: string): Promise<IProduct | null> {
    return await Product.findOne({ name });
  }

}
