import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
/**
 * Checks if domain name of the email has forbidden format
 *
 * @returns `true` if format of email's domain is forbidden
 *
 * @beta
 */
export function incorrectEmailDomainNameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !control?.value?.split('@').pop()?.split('.')[1];
    return forbidden ? { incorrectEmailDomainName: true } : null;
  };
}
