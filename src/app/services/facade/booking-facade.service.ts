import { Injectable } from '@angular/core';
import {BookingStateService} from '../state/booking-state.service';
import {BookingService} from '../booking/booking.service';
import {map, mergeMap, Observable, of, switchMap, throwError} from 'rxjs';
import {CheckInData} from '../../models/check-in-data';
import {BookingNs} from '../../../graphql/namespace';

@Injectable({
  providedIn: 'root'
})
export class BookingFacadeService {

  constructor(
    private bookingService: BookingService,
    private state: BookingStateService
  ) { }

  getCheckInData$(): Observable<CheckInData> {
    return this.state.getCheckInData$();
  }

  verifyCheckIn$(
    bookingCode: string,
    lastName: string
  ): Observable<boolean> {
    return this.bookingService.validateLogin$(
      bookingCode,
      lastName
    ).pipe(
      mergeMap((response) => {
        if(response.data.loginCheckIn) {
          this.state.setCheckInData$({
            bookingCode,
            lastName
          });
          return of(true)
        } else {
          return throwError(() =>
            new Error('Invalid check-in'))
        }
      })
    );
  }

  fetchBookingDetails$(
    bookingCode: string,
  ): Observable<BookingNs.Booking> {
    return this.bookingService.fetchBookingDetails$(bookingCode)
      .pipe(
        map(response => {
          return response.data.bookingDetails as BookingNs.Booking;
        })
      )
  }
}
