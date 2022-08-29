import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const namesInPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const firstName = control.get('firstName');
  const lastName = control.get('lastName');
  const password = control.get('password');

  return firstName?.value &&
    lastName?.value &&
    password?.value &&
    ((firstName.value.length > 1 &&
      password.value.toLowerCase().includes(firstName.value.toLowerCase())) ||
      (lastName.value.length > 1 &&
        password.value.toLowerCase().includes(lastName.value.toLowerCase())))
    ? { namesInPassword: true }
    : null;
};
