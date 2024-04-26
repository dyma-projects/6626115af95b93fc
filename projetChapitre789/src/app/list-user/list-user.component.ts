import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss'
})
export class ListUserComponent {

  private sub = new Subscription();

  public users : User[];

  constructor(private userService:UserService){}

  ngOnInit(){
    this.sub = this.userService.users$.subscribe({
      next:(value)=>{
        this.users = value ; 
      }
    }) 
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
