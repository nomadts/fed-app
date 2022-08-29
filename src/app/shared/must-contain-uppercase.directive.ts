import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function mustContainUppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control?.value?.toLowerCase() === control.value;
    return forbidden ? { mustContainUppercase: true } : null;
  };
}
