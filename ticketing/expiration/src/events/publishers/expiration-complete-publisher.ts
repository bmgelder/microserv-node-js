import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects,
} from '@bmgtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
