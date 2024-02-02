import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
interface adminInterface {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
  Age: string;
}
@Component({
  selector: 'app-admin-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-signup.component.html',
  styleUrl: './admin-signup.component.css'
})
export class AdminSignupComponent {
  public firstname = '';
  public lastname = '';
  public email = '';
  public password = '';
  public age = '';
  public style = 'container col-md-6 col-12 mx-auto pb-3 mt-3 shadow px-2';
  public input = 'shadow form-control my-2';
  public message = '';
  public classStyle = '';

  public adminArray: adminInterface[] = []
  constructor(public route:Router){}
  ngOnInit() {
    if (localStorage['setAdmin']) {
      this.adminArray= JSON.parse(localStorage.getItem('setAdmin')!);
    }
  }
  createAdmin() {
    if (!this.firstname || !this.lastname || !this.email || !this.password || !this.age) {
      this.message = 'All fields are required';
      this.classStyle = 'alert alert-danger text-center';
      setTimeout(() => {
        this.message = '';
        this.classStyle = '';
      }, 2000);
    }
    else{
      
      let userObject = {
      Firstname: this.firstname,
      Lastname: this.lastname,
      Email: this.email,
      Password: this.password,
      Age: this.age
    };
    this.adminArray.push(userObject);
    localStorage.setItem('setAdmin', JSON.stringify(this.adminArray));
    console.log(this.adminArray);
    this.route.navigate(['/login'])
  }
  }


}
