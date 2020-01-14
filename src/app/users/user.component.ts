import { Component } from '@angular/core';
import { User } from '../shared/models/user';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

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

  constructor() {
    this.addUser({id:4, name: 'Anders', lastName: 'Hans'});
  }

  selectUser(user) {
    this.activeUser = user;
    console.log(this.activeUser);
  }

  addUser(user: User) {
    this.users.push(user);
  }

  public download(){
    html2canvas(document.getElementById('results')).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      doc.addImage(img,'JPEG',5,20);
      doc.save('testCanvas.pdf');
    });
  }
  
  /*public download1() {
    console.log('PDF on the way...');
    let doc = new jsPDF();
    doc.text(20, 20, 'Hello world!');
    doc.addPage();
    doc.text(20, 20, 'Hi again this I page two');
    doc.save('Test.pdf');
  }*/
}
