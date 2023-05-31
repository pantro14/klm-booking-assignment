import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

const areAllDigitsInRange = (inputString: string) => {
  const digits = inputString.replace(/\D/g, ""); // Extract only the digits from the string
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    if (digit < 2 || digit > 9) {
      return false;
    }
  }
  return true;
}
export const bookingCodeValidateNumbers = (): ValidatorFn => {
  const regExp = /[2-9]/;
  return (control: AbstractControl): ValidationErrors | null => {
    return !areAllDigitsInRange(control.value) ?
      {validateNumbers: {value: control.value}} :
      null;
  };
}
function isValidString(inputString: string) {
  const regex = /^[a-zA-Z0-9]+$/;
  return regex.test(inputString);
}
export const bookingCodeValidateString = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return !isValidString(control.value) ? {validateString: {value: control.value}} : null;
  };
}
