import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  Register(model: any) {
    return this.http.post('https://backfood2-1traner.onrender.com/register', model)
  }



  
}
