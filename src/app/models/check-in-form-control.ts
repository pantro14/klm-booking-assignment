import {Validators} from '@angular/forms';
import {bookingCodeValidateNumbers, bookingCodeValidateString} from '../utils/custom-validators.utils';

export const checkInFormControl = {
  bookingCode: [
    '',
    [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(6),
      bookingCodeValidateNumbers(),
      bookingCodeValidateString(),
    ]
  ],
  lastName: [
    '',
    [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]
  ],
}
