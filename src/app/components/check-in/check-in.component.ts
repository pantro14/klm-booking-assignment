import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {bookingCodeValidateNumbers, bookingCodeValidateString} from '../../utils/custom-validators/custom-validators';
import {Router} from '@angular/router';
import {LetDirective} from '@ngrx/component';
import {BookingFacadeService} from '../../services/facade/booking-facade.service';
import {Observable, pipe, tap} from 'rxjs';
import {CheckInData} from '../../models/check-in-data';
import {checkInFormControl} from '../../models/check-in-form-control';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LetDirective],
  providers: [BookingFacadeService],
  templateUrl: './check-in.component.html',
  styles: [
  ]
})
export class CheckInComponent implements OnInit {
  checkInData$: Observable<CheckInData>;
  validCheckIn$: Observable<boolean>;
  checkInForm;

  constructor(
    private formBuilder: FormBuilder,
    private facade: BookingFacadeService,
    private router: Router
  ) {
    this.checkInForm = this.formBuilder.group(checkInFormControl)
  }

  ngOnInit() {
    this.checkInData$ = this.facade.getCheckInData$().pipe(
      tap(checkIn => {
        this.checkInForm.controls['bookingCode'].setValue(checkIn.bookingCode);
        this.checkInForm.controls['lastName'].setValue(checkIn.lastName);
      })
    )
  }

  get bookingCode() { return this.checkInForm.get('bookingCode')}

  get lastName() { return this.checkInForm.get('lastName')}

  searchCheckIn() {
    if(!this.checkInForm.invalid) {
      const bookingCode = this.bookingCode?.value as string;
      const lastName = this.lastName?.value as string;
      this.validCheckIn$ = this.facade.verifyCheckIn$(
        bookingCode,
        lastName
      ).pipe(
        tap(() =>
          this.router.navigate(['/booking-details/' + bookingCode]))
      )
    }
  }
}
