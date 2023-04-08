import { CreateLocalProducerController } from './CreateLocalProducerController';
import { CreateLocalProducerUseCase } from './CreateLocalProducerUseCase';
import { ICreateLocalProducerDTO } from './CreateLocalProducerDTO';
import { ILocalProducerRepository } from '../../../repositories';

describe('CreateLocalProducerController', () => {
  const localProducerRepository: ILocalProducerRepository = {
    findByEmail: jest.fn(),
    save: jest.fn(),
  };
  const createLocalProducerUseCase = new CreateLocalProducerUseCase(localProducerRepository);
  const createLocalProducerController = new CreateLocalProducerController(createLocalProducerUseCase);
  const localProducerPayload: ICreateLocalProducerDTO = {
    address: 'fake address',
    email: 'johdoe@example.com',
    name: 'John Doe'
  };
  const request: any = {
    body: localProducerPayload,
  };
  const response: any = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };

  it('should be ok', async () => {
    
    const saved = { ...localProducerPayload, products: [] };

    jest.spyOn(localProducerRepository, 'findByEmail').mockResolvedValueOnce(null);
    jest.spyOn(localProducerRepository, 'save').mockResolvedValueOnce(saved);
    expect(true).toBeTruthy();

    await createLocalProducerController.handle(request, response);

    expect(localProducerRepository.findByEmail).toHaveBeenCalledWith(localProducerPayload.email);
    expect(localProducerRepository.save).toHaveBeenCalledWith(localProducerPayload);
  });
});
