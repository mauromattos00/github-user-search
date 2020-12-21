import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  defaultHeaders = new HttpHeaders().set(
    'Accept',
    'application/vnd.github.v3+json',
  );
  private apiEndpoint = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  get(url: string, params?: HttpParams): Observable<any> {
    return this.http.get(this.apiEndpoint + url, { params });
  }
}
