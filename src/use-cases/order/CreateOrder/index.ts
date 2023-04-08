import { OrderRepository } from '@/repositories';
import { CreateOrderUseCase } from './CreateOrderUseCase';
import { CreateOrderController } from './CreateOrderController';

const orderRepository = new OrderRepository();
const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController };
