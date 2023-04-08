import { User } from '@/models';
import { IUser } from '@/types';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    const user = await User.findOne({ email });
    return user as IUser;
  }

  async save(user: IUser): Promise<IUser | null> {
    const saved = await User.create(user);
    return saved;
  }
  
}