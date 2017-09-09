import { Component } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
  message: string = 'Hello!';
  users: User[] = [
    { id: 1, name: 'Lewis', lastname: 'Hamilton' },
    { id: 2, name: 'Sebastian', lastname: 'Vettel' },
    { id: 3, name: 'Valtteri', lastname: 'Bottas' }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }
}
