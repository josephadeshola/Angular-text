import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
interface studentInterface {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
  MatricNo: string;
}
@Component({
  selector: 'app-student-signup',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './student-signup.component.html',
  styleUrl: './student-signup.component.css',
})
export class StudentSignupComponent {
  public firstname = '';
  public lastname = '';
  public email = '';
  public password = '';
  public matricNo = '';
  public style = 'container col-md-6 col-12 mx-auto pb-3 mt-3 shadow px-2';
  public btn = 'btn btn-primary ';
  public message = '';
  public classStyle = '';
constructor(public route:Router){}
  public userData: studentInterface[] = [];
  ngOnInit() {
    if (localStorage['setData']) {
      this.userData = JSON.parse(localStorage.getItem('setData')!);
    }
  }


  createStudent() {
    if (!this.firstname || !this.lastname || !this.email || !this.password || !this.matricNo) {
      this.message = 'All fields are required';
      this.classStyle = 'alert alert-danger text-center';
      setTimeout(() => {
        this.message = '';
        this.classStyle = '';
      }, 2000);
    }
     else {
      let userObject = {
        Firstname: this.firstname,
        Lastname: this.lastname,
        Email: this.email,
        Password: this.password,
        MatricNo: this.matricNo,
      };
      this.userData.push(userObject);
      localStorage.setItem('setData', JSON.stringify(this.userData));
      this.route.navigate(['login'])
    }
  }
}
