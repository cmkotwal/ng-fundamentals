import { Routes } from '@angular/router';
import {
  EventDetails,
  EventsListComponent,
  CreateEvent,
  EventRouteActivator,
  EventListResolver,
  CreateSession,
} from './events/index';

import { Error404Component } from './errors/404error.component';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEvent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver },
  },
  {
    path: 'events/session/new',
    component: CreateSession,
  },
  {
    path: 'events/:id',
    component: EventDetails,
    canActivate: [EventRouteActivator],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
