import { Component } from '@angular/core';
interface studentInterface {
  Firstname: string;
  Lastname: string;
  Email: string;
  Password: string;
  MatricNo: string;
}
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  public getCurrent: studentInterface  | null = null;

}
