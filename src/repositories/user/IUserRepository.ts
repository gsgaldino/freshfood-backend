import { IUser } from '@/types';

type DefaultUserResponse = Promise<IUser | null>;

export interface IUserRepository {
  findByEmail(email: string): DefaultUserResponse,
  save(user: IUser): DefaultUserResponse
}
