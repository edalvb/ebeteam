import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MonitoreoPaginaService {

  constructor(private http: HttpClient) { }

  getPagina(url: string): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Methods': 'GET'
    // })
    // return this.http.get(url, { headers });
    return this.http.get<any>(url);
  }

}
