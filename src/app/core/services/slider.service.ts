import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  result;

  constructor(private http: HttpClient) {
  }

  getImages(): Observable<any> {
    return this.result = this.http.get("http://163.172.8.204/haythamsalah_backend/public/imgs/slider");
    console.log(this.result);

  }
}
