import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Storage } from '@ionic/storage-angular';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageService, TranslateService,Storage],
      imports: [TranslateModule.forRoot()],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have a method that does XYZ', () => {
    // Test code here
  });

  // More test cases...

});
