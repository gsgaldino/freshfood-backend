import { IUserRepository } from '@/repositories';
import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { ICreateUserDTO } from './CreateUserDTO';

describe('CreateUserController', () => {
  let userRepository: IUserRepository;
  let createUserUseCase: CreateUserUseCase;
  let createUserController: CreateUserController;
  let req: any;
  let res: any;

  beforeEach(() => {
    userRepository = {
      findByEmail: jest.fn(),
      save: jest.fn(),
    };
    createUserUseCase = new CreateUserUseCase(userRepository);
    createUserController = new CreateUserController(createUserUseCase);
    req = {
      body: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      },
    };
    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  it('should create a new user and return it in the response', async () => {
    const user: ICreateUserDTO = req.body;
    jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce(null);
    jest.spyOn(userRepository, 'save').mockResolvedValueOnce(user);

    await createUserController.handle(req, res);

    expect(userRepository.findByEmail).toHaveBeenCalledWith(user.email);
    expect(userRepository.save).toHaveBeenCalledWith(user);
    expect(res.json).toHaveBeenCalledWith({ user });
  });

  it('should return a 500 status code and an error message if an error occurs', async () => {
    const user: ICreateUserDTO = req.body;
    const error = new Error('Something went wrong');
    jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce(null);
    jest.spyOn(userRepository, 'save').mockRejectedValueOnce(error);

    await createUserController.handle(req, res);

    expect(userRepository.findByEmail).toHaveBeenCalledWith(user.email);
    expect(userRepository.save).toHaveBeenCalledWith(user);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false });
  });

  it('should return a 500 status code and an error message if the user already exists', async () => {
    const user: ICreateUserDTO = req.body;
    const existing = { ...user, id: '123' };
    jest.spyOn(userRepository, 'findByEmail').mockResolvedValueOnce(existing);

    await createUserController.handle(req, res);

    expect(userRepository.findByEmail).toHaveBeenCalledWith(user.email);
    expect(userRepository.save).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ success: false });
  });
});
