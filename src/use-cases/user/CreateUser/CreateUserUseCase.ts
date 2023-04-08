import { IUserRepository } from '@/repositories';
import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: ICreateUserDTO) {
    const existing = await this.userRepository.findByEmail(user.email);

    if (existing) throw new Error('User already exists.');

    const saved = await this.userRepository.save(user);

    return saved;
  }
}
