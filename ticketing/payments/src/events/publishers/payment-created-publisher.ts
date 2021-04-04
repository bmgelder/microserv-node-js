import { Publisher, Subjects, PaymentCreatedEvent } from '@bmgtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
