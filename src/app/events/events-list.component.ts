import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrServices } from '../shared/toaster.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
  template: `
    <div>
      <h1>Upcoming Events For Angular</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail
            (click)="this.handleClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: IEvent[] | undefined;

  constructor(
    private eventService: EventService,
    private toastr: ToastrServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleClick(eventName: any) {
    this.toastr.success(eventName);
  }
}
