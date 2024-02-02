import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface studentInterface {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
  MatricNo: string;
}
@Component({
  selector: 'app-display-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './display-user.component.html',
  styleUrl: './display-user.component.css'
})
export class DisplayUserComponent {

  public newUserArray: studentInterface[] = []

  ngOnInit() {
    if (localStorage['setData']) {
      this.newUserArray = JSON.parse(localStorage['setData']);
      console.log(this.newUserArray);
    }
  }
  editItem() {

  }
  deleteUser(id: number) {
    console.log(id);
    let del = this.newUserArray.filter((eachUser, index) => index != id)
    this.newUserArray = del
    localStorage.setItem('setData', JSON.stringify(this.newUserArray))

  }
}
