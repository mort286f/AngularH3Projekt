import { Component, OnInit } from '@angular/core';
import { LightData } from '../Class/light-data';
import { LightsService } from '../Service/lights.service';
import { Observable } from 'rxjs';
import {  NgForm,  FormBuilder,  FormGroup,  Validators,  FormControl  } from '@angular/forms';

@Component({
  selector: 'app-light-c',
  templateUrl: './light-c.component.html',
  styleUrls: ['./light-c.component.css']
})
export class LightCComponent implements OnInit {

  allLight: Observable < LightData[] > ;

  constructor(private LightsService:LightsService) { }

  GetLight() {  
    debugger;  
    this.allLight = this.LightsService.getLight();  
   }
  ngOnInit(): void {

    this.GetLight();
  }
}
