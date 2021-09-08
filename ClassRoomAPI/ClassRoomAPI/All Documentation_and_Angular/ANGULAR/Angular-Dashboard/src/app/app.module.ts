import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { NavComponent } from './nav/nav.component';
import { LightConditionComponent } from './light-condition/light-condition.component';
import { HomeComponent } from './home/home.component';
import { NoiseLevelComponent } from './noise-level/noise-level.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { TempComponent } from './ClassRoom/temp/temp.component';
import { LightCComponent } from './ClassRoom/light-c/light-c.component';
import { NoiseLComponent } from './ClassRoom/noise-l/noise-l.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    NavComponent,
    LightConditionComponent,
    HomeComponent,
    NoiseLevelComponent,
    ContactComponent,
    TempComponent,
    LightCComponent,
    NoiseLComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
