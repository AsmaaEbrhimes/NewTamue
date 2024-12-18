import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenralService {
  $ShowTostr = new BehaviorSubject<boolean>(false);
  $TostrText = new BehaviorSubject<string>('');

  constructor() { }

}
