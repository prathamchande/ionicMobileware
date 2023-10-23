import { TestBed } from '@angular/core/testing';

import { ApiCallService } from './api-call.service';
import { HttpClientModule } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

describe('ApiCallService', () => {
  let service: ApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    
      imports: [HttpClientModule],
    });
    
    service = TestBed.inject(ApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
it('should decrypt value',()=>{
    const message = 'Test message';
    const key = 'SecretKey123';
    const iv = 'InitialVector456';

    let decryptedMessage = service.decryptMessage(message,key,iv);
    const decryptedValue =  CryptoJS.AES.decrypt(message, key, { iv: iv }).toString(CryptoJS.enc.Utf8);
    expect(decryptedMessage).toBe(decryptedValue);
})
});
