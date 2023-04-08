import { IOrder } from '@/types';

export type CreateOrderDTO = Pick<IOrder, 'products' | 'status' | 'total'>;
