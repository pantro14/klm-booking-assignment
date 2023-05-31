import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingService} from '../../services/booking/booking.service';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {bookingCodeValidateNumbers, bookingCodeValidateString} from '../../utils/custom-validators/custom-validators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-check-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [BookingService],
  templateUrl: './check-in.component.html',
  styles: [
  ]
})
export class CheckInComponent{
  checkInForm = this.formBuilder.group({
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
  })

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private router: Router
  ) {}

  get bookingCode() { return this.checkInForm.get('bookingCode')}

  get lastName() { return this.checkInForm.get('lastName')}

  searchCheckIn() {
    if(!this.checkInForm.invalid) {
      this.bookingService.fetchBookingDetails(
        this.bookingCode?.value as string,
        this.lastName?.value as string
      )
        .subscribe({
          next: (response) => {
            this.router.navigate(['booking-details/' + response.data.booking?.bookingCode])
          },
          error: err => console.error('error: ', err)
        })
    }
  }
}
