import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class UserListService {
  constructor(private api: ApiService) {}

  searchUsers(username: string): Observable<any> {
    const params = new HttpParams().set('q', username).set('per_page', '5');
    return this.api.get('/search/users', params);
  }

  getUser(username: string): Observable<any> {
    return this.api.get(`/users/${username}`);
  }
}
