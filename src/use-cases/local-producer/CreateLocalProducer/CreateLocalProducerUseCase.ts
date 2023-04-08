import { ILocalProducerRepository } from '@/repositories';
import { ICreateLocalProducerDTO } from './CreateLocalProducerDTO';

export class CreateLocalProducerUseCase {
  constructor(private localProducerRepository: ILocalProducerRepository) {}

  async execute(createLocalProducerDto: ICreateLocalProducerDTO) {
    const exists = await this.localProducerRepository.findByEmail(createLocalProducerDto.email);

    if (exists) throw new Error('Local producer already exists');

    const saved = await this.localProducerRepository.save({
      address: createLocalProducerDto.address,
      email: createLocalProducerDto.email,
      name: createLocalProducerDto.name,
    });

    return saved;
  }
}
