import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import {
  EventsListComponent,
  EventThumbnail,
  EventService,
  EventDetails,
  EventListResolver,
  EventResolver,
  CreateEvent,
  CreateSession,
  SessionListComponent,
  DurationPipe,
  UpVoteComponent,
  VoterService,
  LocationValidator,
} from "./events/index";

import {
  Toastr,
  TOASTR_TOKEN,
  CollapsibleWell,
  JQ_TOKEN,
  SimpleModal,
  ModalTriggerDirective,
} from "./shared/index";
import { EventsAppComponent } from "./events-app.component";
import { NavBar } from "./nav/nav-component";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404error.component";
import { AuthService } from "./user/auth.service";

let toastr: Toastr | any;
let jQuery;

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
    SimpleModal,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    VoterService,
    EventResolver,
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
