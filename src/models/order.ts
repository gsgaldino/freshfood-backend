import { Schema, model } from 'mongoose';
import { IOrder, OrderStatus } from '@/types';

const orderSchema = new Schema<IOrder>({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }],
  status: {
    type: String,
    enum: OrderStatus,
    default: OrderStatus.PENDING,
  },
  total: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const Order = model<IOrder>('Order', orderSchema);
