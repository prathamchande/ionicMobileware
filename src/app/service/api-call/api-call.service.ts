import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConstantsService } from '../constants/constants.service';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private constants: ConstantsService,private http: HttpClient  ) { }



  public getData(): Observable<any> {
    let endpoint='posts'
    return this.http.get(`${this.constants.url}/${endpoint}`);
  }

  encryptMessage(message: string, key: string, iv: string): string {
    const cipherText = CryptoJS.AES.encrypt(message, key, { iv: iv }).toString();
    return cipherText;
  }

  decryptMessage(cipherText: string, key: string, iv: string): string {
    const decryptedMessage = CryptoJS.AES.decrypt(cipherText, key, { iv: iv }).toString(CryptoJS.enc.Utf8);
    return decryptedMessage;
  }
}
