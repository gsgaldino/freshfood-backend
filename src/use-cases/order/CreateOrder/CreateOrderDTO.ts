import { IOrder } from '@/types';

export type CreateOrderDTO = Partial<Pick<IOrder, 'products' | 'status' | 'total' | 'user'>>;
