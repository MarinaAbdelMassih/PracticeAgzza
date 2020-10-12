import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) {
  }

  getImages(): Observable<any> {
    return this.http.get("http://163.172.8.204/agzza_backend/api/home");

  }
}
