import { ILocalProducer } from '@/types';

export interface ILocalProducerRepository {
  findByEmail(email: string): Promise<ILocalProducer | null>,
  save(localProducer: Omit<ILocalProducer, 'products'>): Promise<ILocalProducer | null>
}
