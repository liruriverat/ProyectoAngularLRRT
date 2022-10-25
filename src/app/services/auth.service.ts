import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url=environment.apiUrl;
  constructor(private http:HttpClient){}

  
    register(registro:Register){
      return this.http.post(`${this.url}register`,registro)
    }

login(credenciales:Register){
return this.http.post<any>(`${this.url}login`, credenciales)
}

logout(){}

  }
