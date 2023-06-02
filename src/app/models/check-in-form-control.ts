import {Validators} from '@angular/forms';
import {bookingCodeValidateNumbers, bookingCodeValidateString, validMaxLength} from '../utils/custom-validators.utils';

export const checkInFormControl = {
  bookingCode: [
    '',
    [
      Validators.required,
      Validators.minLength(5),
      validMaxLength(6),
      bookingCodeValidateNumbers(),
      bookingCodeValidateString(),
    ]
  ],
  lastName: [
    '',
    [
      Validators.required,
      Validators.minLength(2),
      validMaxLength(30),
    ]
  ],
}
