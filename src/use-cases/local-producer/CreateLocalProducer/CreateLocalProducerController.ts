import type { Response, Request } from 'express';
import { CreateLocalProducerUseCase } from './CreateLocalProducerUseCase';
import { ICreateLocalProducerDTO } from './CreateLocalProducerDTO';

export class CreateLocalProducerController {
  constructor(private createLocalProducerUseCase: CreateLocalProducerUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const createLocalProducerDto: ICreateLocalProducerDTO = req.body;
      const localProducer = await this.createLocalProducerUseCase.execute(createLocalProducerDto);

      return res.json({ success: true, localProducer });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Unexpected error' });
    }
  }
}
