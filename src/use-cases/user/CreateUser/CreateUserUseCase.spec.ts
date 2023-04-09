import { IUserRepository } from '@/repositories';
import { CreateUserUseCase } from './CreateUserUseCase';
import { ICreateUserDTO } from './CreateUserDTO';

const userRepository: IUserRepository = {
  findByEmail: jest.fn(),
  save: jest.fn(),
};

const createUserUseCase = new CreateUserUseCase(userRepository);

const createUserDto: ICreateUserDTO = {
  email: 'johndoe@example.com',
  name: 'John Doe',
  password: '1234',
  address: 'Sample address',
  phone: '(11)998989898'
};

describe('CreateUserUseCase', () => {
  it('should throw an error when the user already exists', async () => {
    (userRepository.findByEmail as jest.Mock).mockResolvedValueOnce({ _id: Date.now() });

    await expect(createUserUseCase.execute(createUserDto)).rejects.toThrow('User already exists');
    expect(userRepository.findByEmail).toHaveBeenCalledWith(createUserDto.email);
    expect(userRepository.save).not.toHaveBeenCalled();
  });

  it('should save a user when there is no existing user with the same email', async () => {
    const expectedUSer = { _id: Date.now() };
    (userRepository.findByEmail as jest.Mock).mockResolvedValueOnce(null);
    (userRepository.save as jest.Mock).mockResolvedValueOnce(expectedUSer);

    const result = await createUserUseCase.execute(createUserDto);

    expect(result).toStrictEqual(expectedUSer);
    expect(userRepository.findByEmail).toHaveBeenCalledWith(createUserDto.email);
    expect(userRepository.save).toHaveBeenCalledWith(createUserDto);
  });
});
