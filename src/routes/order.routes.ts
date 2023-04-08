import { Router } from 'express';
import { createOrderController } from '@/use-cases/order';

const router = Router();

router.post('/', createOrderController.handle.bind(createOrderController));

export default router;
