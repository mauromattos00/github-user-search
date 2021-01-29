import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  defaultHeaders = new HttpHeaders().set(
    'Accept',
    'application/vnd.github.v3+json',
  );

  get(url: string, params?: HttpParams): Observable<any> {
    return this.http.get(environment.githubApiEndpoint + url, { params });
  }

  constructor(private http: HttpClient) {}
}
