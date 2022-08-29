import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SignUpComponent } from './sign-up.component';
import { SignUpService } from './sign-up.service';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  const mockSignUpService = {
    registerUser: () => {},
  };
  const mockFormBuilder = {
    group: () => ({
      value: { firstName: '', lastName: '', email: '' },
      reset: () => {},
      get: () => {},
    }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      providers: [
        { provide: FormBuilder, useValue: mockFormBuilder },
        { provide: SignUpService, useValue: mockSignUpService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
