import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';
import { adminGuardGuard } from './guards/admin-guard.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent,children:[
        {path:'create',component:StudentSignupComponent},
        {path:'login',component:LoginComponent},
        {path:'admin',component:AdminSignupComponent},
        {path:'dashboard',children:[
            {path:'',component:DisplayUserComponent}
        ],canActivate:[adminGuardGuard]},
    
        {path:'**',component:ErrorPageComponent}
    ]}
];
