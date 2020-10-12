import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  constructor(private http: HttpClient) {

  }

  getcollections() {
    return this.http.get("http://163.172.8.204/agzza_backend/api/collections");
  }
}
