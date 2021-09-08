// Create service!
import { Injectable } from '@angular/core';

// Using HttpClient to call API services and http GET method!
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';    

// Using references!
import { Observable } from 'rxjs'; 
import { TemperatureData } from '../Class/temperature-data';

@Injectable({
  providedIn: 'root'
})
export class TemperaturesService {

  // Declare API url!
  Url = 'http://localhost:44889/api';   

  constructor(private http:HttpClient) { } 

  // Declare method for view data!
  getTemperature():Observable<TemperatureData[]>    
  {    
    return this.http.get<TemperatureData[]>(this.Url + '/ClassRoom/AllTemperatures');    
  } 
}
