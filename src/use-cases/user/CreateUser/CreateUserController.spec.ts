import type { Request, Response } from 'express';

import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';

const createUserUseCaseMock = {
  execute: jest.fn(),
} as unknown as CreateUserUseCase;

const createUserController = new CreateUserController(createUserUseCaseMock);

const req = {
  body: {
    email: 'johndoe@example.com',
    name: 'John Doe',
    password: '1234',
    address: 'Example address',
    phone: '(11)998989898',
  },
} as Request;

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;

describe('CreateUserController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send a error if user already exists', async () => {
    const expectedError = new Error('User already exists');
    (createUserUseCaseMock.execute as jest.Mock).mockRejectedValueOnce(expectedError);

    await createUserController.handle(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false
    });
  });

  it('should create a user and send it into response', async () => {
    const user = req.body;
    (createUserUseCaseMock.execute as jest.Mock).mockResolvedValueOnce(user);

    await createUserController.handle(req, res);

    expect(res.json).toHaveBeenCalledWith({ user });
  });
});
