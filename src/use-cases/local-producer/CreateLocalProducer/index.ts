import { LocalProducerRepository } from '@/repositories/local-producer';
import { CreateLocalProducerController } from './CreateLocalProducerController';
import { CreateLocalProducerUseCase } from './CreateLocalProducerUseCase';

const localProducerRepository = new LocalProducerRepository();
const createLocalProducerUseCase = new CreateLocalProducerUseCase(localProducerRepository);
const createLocalProducerController = new CreateLocalProducerController(createLocalProducerUseCase);

export { createLocalProducerController };
