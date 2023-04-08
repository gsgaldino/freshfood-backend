import { Router } from 'express';
import { createProductController } from '@/use-cases/product';

const router = Router();

router.post('/', createProductController.handle.bind(createProductController));

export default router;
