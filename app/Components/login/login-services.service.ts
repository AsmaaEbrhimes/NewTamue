import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.pord';
@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {
  baseApi = environment.baseApi
  constructor(private http: HttpClient) { }

  Login(model: any) {
    return this.http.post(`${this.baseApi}login`, model)
  }

}
