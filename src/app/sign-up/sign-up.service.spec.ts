import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';

describe('SignUpService', () => {
  let service: SignUpService;
  let mockHttpClient = {
    post: () => {},
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(SignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
