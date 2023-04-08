import type { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';
import { ICreateProductDTO } from './CreateProductDTO';

export class CreateProductController {
  constructor(private createProductUseCase: CreateProductUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const payload: ICreateProductDTO = req.body;
      const saved = await this.createProductUseCase.execute(payload);
      res.json({ success: true, product: saved });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}
