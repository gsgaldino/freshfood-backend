import { Order } from '@/models';
import { IOrder } from '@/types';
import { IOrderRepository } from './IOrderRepository';

export class OrderRepository implements IOrderRepository {
  async getById(id: string): Promise<IOrder | null> {
    return await Order.findById(id);
  }
  async save(order: IOrder): Promise<IOrder | null> {
    return await Order.create(order);
  }
}
