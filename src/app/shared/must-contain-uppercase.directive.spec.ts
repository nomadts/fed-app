import { AbstractControl } from '@angular/forms';

import { mustContainUppercaseValidator } from './must-contain-uppercase.directive';

describe('mustContainUppercaseValidator', () => {
  const allLowerCasesMock = { value: 'test' };
  const allUpperCasesMock = { value: 'TEST' };
  const mixedCasesMock = { value: 'TeSt' };
  const noLettersMock = { value: '123!@#' };
  const validatorCallback = mustContainUppercaseValidator();

  beforeEach(() => {});

  it('should return true when no uppercases', () => {
    expect(
      validatorCallback(allLowerCasesMock as AbstractControl)
    ).toBeTruthy();
  });

  it('should return false when all uppercases', () => {
    expect(validatorCallback(allUpperCasesMock as AbstractControl)).toBeFalsy();
  });

  it('should return false when both uppercases and lowercases are present', () => {
    expect(validatorCallback(mixedCasesMock as AbstractControl)).toBeFalsy();
  });

  it('should return true when no letters are present', () => {
    expect(validatorCallback(noLettersMock as AbstractControl)).toBeTruthy();
  });
});
