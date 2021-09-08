// Create service!
import { Injectable } from '@angular/core';

// Using HttpClient to call API services and http GET method!
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';  

// Using references!
import { Observable } from 'rxjs'; 
import { LightData } from '../Class/light-data';

@Injectable({
  providedIn: 'root'
})
export class LightsService {

  // Declare API url! 
  Url = 'http://localhost:44889/api';   

  constructor(private http:HttpClient) { } 

  // Declare method for view data!
  getLight():Observable<LightData[]>    
  {    
    return this.http.get<LightData[]>(this.Url + '/ClassRoom/AllLights');    
  } 
}
