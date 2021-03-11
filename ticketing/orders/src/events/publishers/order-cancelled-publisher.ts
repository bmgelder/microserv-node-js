import { Publisher, OrderCancelledEvent, Subjects } from '@bmgtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
