import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { take, tap } from 'rxjs';
import { incorrectEmailDomainNameValidator } from '../shared/incorrect-email-domain.directive';
import { mustContainLowercaseValidator } from '../shared/must-contain-lowercase.directive';
import { mustContainUppercaseValidator } from '../shared/must-contain-uppercase.directive';
import { namesInPasswordValidator } from '../shared/names-in-password.directive';
import { SignUpService, UserDetails } from './sign-up.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signupForm = this.fb.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          incorrectEmailDomainNameValidator(),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          mustContainUppercaseValidator(),
          mustContainLowercaseValidator(),
        ],
      ],
    },
    { validators: namesInPasswordValidator }
  );
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private signUpService: SignUpService) {}

  ngOnInit(): void {}

  onSubmit() {
    const payload = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
    } as UserDetails;
    this.signUpService
      .registerUser(payload)
      .pipe(
        take(1),
        tap(() => this.signupForm.reset()),
        tap(() =>
          alert(
            `Congrats ${payload.firstName}! You have successfully signed up.`
          )
        )
      )
      .subscribe();
  }
}
