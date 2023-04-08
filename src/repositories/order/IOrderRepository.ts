import { IOrder } from '@/types';

export interface IOrderRepository {
  getById(id: string): Promise<IOrder | null>;
  save(order: IOrder): Promise<IOrder | null>;
}
