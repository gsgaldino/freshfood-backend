import type { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';
import { CreateOrderDTO } from './CreateOrderDTO';

export class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const payload: CreateOrderDTO = req.body;
      const order = await this.createOrderUseCase.execute(payload)
      res.json({ success: true, order });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
