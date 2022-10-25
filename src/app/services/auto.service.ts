import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Autos } from '../models/autos.model';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private url = environment.apiUrl;
  constructor(private http:HttpClient) { }



  get(): Observable<Autos[]>{
    return this.http.get<Autos[]>(`${this.url}autos`)
  }


  save(auto:Autos):Observable<any>{
   
    return this.http.post(`${this.url}autos`, auto);
   
    }
     
     
    getById(id:number):Observable<Autos>{
      return this.http.get<Autos>(`${this.url}autos/${id}`);
    }
    


    update(id:number, autos:Autos){
     
      return this.http.put(`${this.url}autos/${id}`, autos);    }
    
    delete(id:number){
      return this.http.delete(`${this.url}autos/${id}`);
     
    }



}
