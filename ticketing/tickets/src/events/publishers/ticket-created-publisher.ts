import { Publisher, Subjects, TicketCreatedEvent } from '@bmgtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
