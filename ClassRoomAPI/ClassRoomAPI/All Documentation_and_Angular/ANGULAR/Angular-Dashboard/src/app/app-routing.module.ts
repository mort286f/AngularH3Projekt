import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { LightConditionComponent } from './light-condition/light-condition.component';
import { NoiseLevelComponent } from './noise-level/noise-level.component';
import { ContactComponent } from './contact/contact.component';
import { TempComponent } from './ClassRoom/temp/temp.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'temperature', component: TemperatureComponent },
  { path: 'light-condition', component: LightConditionComponent },
  { path: 'noise-level', component: NoiseLevelComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'temp', component: TempComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
