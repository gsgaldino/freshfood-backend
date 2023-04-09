import type { Request, Response } from 'express';

import { CreateLocalProducerController } from './CreateLocalProducerController';
import { CreateLocalProducerUseCase } from './CreateLocalProducerUseCase';

const createLocalProducerUseCaseMock = {
  execute: jest.fn(),
} as unknown as CreateLocalProducerUseCase;

const createLocalProducerController = new CreateLocalProducerController(createLocalProducerUseCaseMock);

const req = {
  body: {
    email: 'johndoe@example.com',
    name: 'John Doe',
    address: 'Example address',
  },
} as Request;

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;

describe('CreateLocalProducerController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should send a error if local producer already exists', async () => {
    (createLocalProducerUseCaseMock.execute as jest.Mock).mockRejectedValueOnce(new Error('Local producer already exists'));

    await createLocalProducerController.handle(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: 'Unexpected error',
    });
  });

  it('should create a local producer and send it into response', async () => {
    const localProducer = req.body;
    (createLocalProducerUseCaseMock.execute as jest.Mock).mockResolvedValueOnce(localProducer);

    await createLocalProducerController.handle(req, res);

    expect(res.json).toHaveBeenCalledWith({ success: true, localProducer });
  });
});
