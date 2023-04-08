import { Schema, model } from 'mongoose';
import { IUser } from '@/types';

const userSchema = new Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  password: String,
  address: String,
  phone: String,
});

export const User = model<IUser>('User', userSchema);
