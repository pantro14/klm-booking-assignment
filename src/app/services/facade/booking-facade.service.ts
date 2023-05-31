import { Injectable } from '@angular/core';
import {BookingStateService} from '../state/booking-state.service';
import {BookingService} from '../booking/booking.service';
import {mergeMap, Observable, of, throwError} from 'rxjs';
import {CheckInData} from '../../models/check-in-data';

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
    return this.bookingService.validateLogin(
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
}
