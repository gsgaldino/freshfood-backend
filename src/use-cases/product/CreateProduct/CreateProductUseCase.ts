import { IProductRepository } from '@/repositories';
import { ICreateProductDTO } from './CreateProductDTO';

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {};

  async execute(data: ICreateProductDTO) {
    const exists = await this.productRepository.getByName(data.name);

    if (exists) throw new Error('Product already exists.');

    const saved = await this.productRepository.save({
      ...data,
      description: data.description || '',
    });

    return saved;
  }
}
