// Create service!
import { Injectable } from '@angular/core';

// Using HttpClient to call API services and http GET method!
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';    

// Using references!
import { Observable } from 'rxjs'; 
import { NoiseData } from '../Class/noise-data';

@Injectable({
  providedIn: 'root'
})
export class NoisesService {

  // Declare API url!
  Url = 'http://localhost:44889/api';   

  constructor(private http:HttpClient) { } 

  // Declare method for view data! 
  getNoise():Observable<NoiseData[]>    
  {    
    return this.http.get<NoiseData[]>(this.Url + '/ClassRoom/AllNoises');    
  } 
}
