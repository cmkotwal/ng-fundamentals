import { Injectable } from '@angular/core';
import { IUser } from './user.modal';

@Injectable()
export class AuthService {
  currentUser: IUser | any;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Chetan',
      lastName: 'Kotwal',
      userName: 'cmkotwal',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
