import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  
  getDataProfile () {
    return this.http.get(this.url + '/profile');
  }

}
