import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mustContainLowercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control?.value?.toUpperCase() === control.value;
    return forbidden ? { mustContainLowercase: true } : null;
  };
}
