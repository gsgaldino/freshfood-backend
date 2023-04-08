import { Router } from 'express';
import { createLocalProducerController } from '@/use-cases/local-producer';

const router = Router();

router.post('/', createLocalProducerController.handle.bind(createLocalProducerController));

export default router;
