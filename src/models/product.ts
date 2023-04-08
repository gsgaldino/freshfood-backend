import { Schema, model } from 'mongoose';
import { IProduct, Category } from '@/types';

const productSchema = new Schema<IProduct>({
  category: {
    type: String,
    enum: Category,
  },
  description: String,
  name: String,
  price: Number,
  quantity: Number,
});

export const Product = model<IProduct>('Product', productSchema);
