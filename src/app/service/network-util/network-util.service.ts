import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkUtilService {

  constructor() { }

  private getHeaders() {
    return new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      'sessionId': localStorage.getItem('sessionId'),
      'Content-Type': 'application/json',
      'requestID': 'requestID', // Replace with dynamic value
      'customerid': localStorage.getItem('customerId')
    });
  }
}
