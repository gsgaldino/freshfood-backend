import { ILocalProducer } from '@/types';
import { LocalProducer } from '@/models';

import { ILocalProducerRepository } from './ILocalProducerRepository';

export class LocalProducerRepository implements ILocalProducerRepository {
  async findByEmail(email: string): Promise<ILocalProducer | null> {
    const user = await LocalProducer.findOne({ email });
    return user;
  }
  async save(localProducer: ILocalProducer): Promise<ILocalProducer | null> {
    const saved = await LocalProducer.create(localProducer);
    return saved;
  }
}
