import { Component } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  public nameUser:string ;

  constructor(private userService:UserService){}

  public addUser():void{
    this.userService.addUser({ name :this.nameUser});
    this.nameUser = null ;
  }
}
