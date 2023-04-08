import { IUserRepository } from '@/repositories';
import { ICreateUserDTO } from './CreateUserDTO';
import { CreateUserUseCase } from './CreateUserUseCase';

describe('CreateUserUseCase', () => {
  const user: ICreateUserDTO = { email: 'test@example.com', password: 'password', name: 'John Doe' };
  let userRepository: IUserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    userRepository = {
      findByEmail: jest.fn(),
      save: jest.fn(),
    };
    createUserUseCase = new CreateUserUseCase(userRepository);
  });

  describe('execute', () => {
    it('should save a new user when there is no existing user with the same email', async () => {
      (userRepository.findByEmail as jest.Mock).mockReturnValueOnce(null);
      (userRepository.save as jest.Mock).mockReturnValueOnce({ ...user, id: '1' });

      const result = await createUserUseCase.execute(user);

      expect(result).toEqual({ ...user, id: '1' });
      expect(userRepository.findByEmail).toHaveBeenCalledWith('test@example.com');
      expect(userRepository.save).toHaveBeenCalledWith(user);
    });

    it('should throw an error when there is an existing user with the same email', async () => {
      (userRepository.findByEmail as jest.Mock).mockReturnValueOnce({ ...user, id: '1' });

      const result = createUserUseCase.execute(user);

      await expect(result).rejects.toThrow('User already exists.');
      expect(userRepository.findByEmail).toHaveBeenCalledWith('test@example.com');
      expect(userRepository.save).not.toHaveBeenCalled();
    });
  });
});
