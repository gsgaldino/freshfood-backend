import { Router } from 'express';
import { createUserController } from '@/use-cases/user';

const router = Router();

router.post('/', createUserController.handle.bind(createUserController));

export default router;
