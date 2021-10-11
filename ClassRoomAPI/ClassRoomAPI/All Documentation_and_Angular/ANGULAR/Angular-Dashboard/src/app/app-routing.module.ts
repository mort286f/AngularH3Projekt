import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LightConditionComponent } from './light-condition/light-condition.component';
import { NoiseLevelComponent } from './noise-level/noise-level.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './ClassRoom/Service/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'temperature', component: TemperatureComponent, canActivate: [AuthGuardService] }, {path: 'temperature', redirectTo: 'login'},
  { path: 'light-condition', component: LightConditionComponent, canActivate: [AuthGuardService] }, {path: 'light-condition', redirectTo: 'login'},
  { path: 'noise-level', component: NoiseLevelComponent,canActivate: [AuthGuardService] }, {path: 'noise-level', redirectTo: 'login' },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
