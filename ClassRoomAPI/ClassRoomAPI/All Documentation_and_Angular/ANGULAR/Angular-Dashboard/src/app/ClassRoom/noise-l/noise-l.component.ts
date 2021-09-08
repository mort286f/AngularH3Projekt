import { Component, OnInit } from '@angular/core';
import { NoiseData } from '../Class/noise-data';
import { NoisesService } from '../Service/noises.service';
import { Observable } from 'rxjs';
import {  NgForm,  FormBuilder,  FormGroup,  Validators,  FormControl  } from '@angular/forms'; 

@Component({
  selector: 'app-noise-l',
  templateUrl: './noise-l.component.html',
  styleUrls: ['./noise-l.component.css']
})
export class NoiseLComponent implements OnInit {

  allNoise: Observable < NoiseData[] > ;

  constructor(private NoisesService:NoisesService) { }

  GetNoise() {  
    debugger;  
    this.allNoise = this.NoisesService.getNoise();  
   }
  ngOnInit(): void {

    this.GetNoise();
  }
}
