import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PesticidiService {

  private API_URL: string = 'http://localhost:3000/zahtevi';

  constructor(private http: HttpClient) { }

  posaljiZahtev(zahtev:any): Observable<any> {
    return this.http.post(this.API_URL, zahtev);
  }

}