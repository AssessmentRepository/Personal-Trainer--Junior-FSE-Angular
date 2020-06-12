import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { AuthGuard } from './_guards';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: "landing-page", component: LandingPageComponent },
  { path: "place-fitness-trainer-appointment", component: PlaceFitnessTrainerAppointmentComponent },
  { path: "view-appointment",component: ViewAppointmentComponent },
  { path: "contact-us",component: ContactUsComponent },
  { path: "**", redirectTo: "landing-page" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
