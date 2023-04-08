import type { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { ICreateUserDTO } from './CreateUserDTO';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const payload: ICreateUserDTO = req.body;

      const user = await this.createUserUseCase.execute(payload);
      res.json({ user });
    } catch (error) {
      res.status(500).json({ success: false });
    }
  }
}
