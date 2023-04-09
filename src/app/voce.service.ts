import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoceService {

  private API_URL: string = 'http://localhost:3000/voce';

  constructor(private http: HttpClient) { }

  getOcekivaniDoprinos(vrsta: string, datumOd: string, datumDo: string): Observable<any> {
    const queryParams = `?vrsta=${vrsta}&datumOd=${datumOd}&datumDo=${datumDo}`;
    return this.http.get(`${this.API_URL}/ocekivaniDoprinos${queryParams}`);
  }

}