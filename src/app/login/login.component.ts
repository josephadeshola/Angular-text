import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
interface studentInterface {
  Email: string;
  Password: string;
}
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public email = '';
  public password = '';
  public style = 'container col-md-6 col-12 mx-auto pb-3 mt-3 shadow px-2';
  public input = 'shadow form-control my-2';
  public btn = 'btn btn-primary ';
  public message = '';
  public classStyle = '';
  public newUserArray: studentInterface[] = [];
  constructor(public route: Router) { }

  // ngOnInit() {
  //   if (localStorage['setData']) {
  //     this.newUserArray = JSON.parse(localStorage['setData']);
  //     console.log(this.newUserArray);
  //   }
  // }
  createStudent(){

  }
}
