import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaDniService {

  constructor( private http: HttpClient) { }

  getPersonaDni(dni: String){
    return this.http.get(`https://dni.optimizeperu.com/api/persons/${dni}`)
  }
}
