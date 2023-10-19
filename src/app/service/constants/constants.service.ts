import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public url: any = "https://jsonplaceholder.typicode.com"; 
  constructor() { }
}
