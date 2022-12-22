import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  EventsListComponent,
  EventThumbnail,
  EventService,
  EventDetails,
  EventListResolver,
  EventRouteActivator,
  CreateEvent,
  CreateSession,
  SessionListComponent,
  DurationPipe,
} from "./events/index";

import { EventsAppComponent } from "./events-app.component";
import { NavBar } from "./nav/nav-component";
import { TOASTR_TOKEN, Toastr } from "./shared/toaster.service";
import { CollapsibleWell } from "./shared/collapsible-well.component";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404error.component";
import { AuthService } from "./user/auth.service";

declare let toastr: Toastr;

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnail,
    NavBar,
    EventDetails,
    CreateEvent,
    Error404Component,
    CreateSession,
    SessionListComponent,
    CollapsibleWell,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: "canDeactivateCreateEvent", useValue: removeDirtyValue },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function removeDirtyValue(component: CreateEvent) {
  if (component.isDirty) {
    return window.confirm(
      "you have not saved this event, Do you really want to cancel?"
    );
  }
  return true;
}
