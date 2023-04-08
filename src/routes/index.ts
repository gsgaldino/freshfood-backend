import { Router } from 'express';

import user from './users.routes';
import product from './product.routes';
import localProducer from './local-producer.routes';
import order from './order.routes';

const router = Router();

router.use('/user', user);
router.use('/product', product);
router.use('/local-producer', localProducer);
router.use('/order', order);

export default router;
