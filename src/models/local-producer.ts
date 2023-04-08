import { Schema, model } from 'mongoose';
import { ILocalProducer } from '@/types';

const localProducerSchema = new Schema<ILocalProducer>({
  address: String,
  name: String,
  products: [],
  email: String,
});

export const LocalProducer = model<ILocalProducer>('LocalProducer', localProducerSchema);
