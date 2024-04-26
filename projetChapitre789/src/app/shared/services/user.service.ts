import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users = new BehaviorSubject<User[]>([]);
  public users$ = this.users.asObservable();
  
  constructor() { }

  addUser(nameUser: User) :void {

    let usersTempo = this.users.value;
    usersTempo.push(nameUser);

    this.users.next(usersTempo);
  }
}
