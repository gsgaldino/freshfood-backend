import { IOrderRepository } from '@/repositories';
import { CreateOrderDTO } from './CreateOrderDTO';

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(data: CreateOrderDTO) {
    const { products, status, total, user } = data;
    const created = await this.orderRepository.save({
      products,
      status,
      total,
      user,
    });

    return created;
  }
}
