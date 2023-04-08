import { IProduct } from './product';

export enum OrderStatus {
  PROCESSING = 'processing', // O pedido foi recebido e está sendo preparado pelo produtor local
  ON_THE_WAY = 'on_the_way', // O pedido já foi preparado e está a caminho do destino final
  DELIVERED = 'delivered', // O pedido foi entregue com sucesso ao cliente
  CANCELLED = 'cancelled', // O pedido foi cancelado pelo cliente ou pelo produtor local por algum motivo
  PENDING = 'pending', // O pedido está aguardando confirmação de pagamento ou de algum outro processo antes de ser processado
}

export interface IOrder {
  createdAt?: Date;
  products: IProduct[];
  status: OrderStatus;
  total: number;
}
