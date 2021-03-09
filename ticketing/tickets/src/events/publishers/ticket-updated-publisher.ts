import { Publisher, Subjects, TicketUpdatedEvent } from '@bmgtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
