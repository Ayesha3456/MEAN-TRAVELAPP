import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {
  private apiUrl = 'assets/destinations.json';

  constructor(private http: HttpClient) { }

  getDestinations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addDestination(destination: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, destination);
  }
}
