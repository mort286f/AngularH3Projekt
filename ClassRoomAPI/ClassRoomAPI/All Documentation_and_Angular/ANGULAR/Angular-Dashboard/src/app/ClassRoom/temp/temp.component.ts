import { Component, OnInit } from '@angular/core';
import { TemperatureData } from '../Class/temperature-data';
import { TemperaturesService } from '../Service/temperatures.service';
import { Observable } from 'rxjs';
import {  NgForm,  FormBuilder,  FormGroup,  Validators,  FormControl  } from '@angular/forms'; 

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
 
  allTemp: Observable < TemperatureData[] > ;

  constructor(private TemperaturesService:TemperaturesService) { }

  GetTemp() {  
    debugger;  
    this.allTemp = this.TemperaturesService.getTemperature();  
   }
  ngOnInit(): void {

    this.GetTemp();
  }
}
