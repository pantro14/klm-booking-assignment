import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CheckInData} from '../../models/check-in-data';

@Injectable({
  providedIn: 'root'
})
export class BookingStateService {
  private checkInData$: BehaviorSubject<CheckInData> =
    new BehaviorSubject<CheckInData>({
      bookingCode: '',
      lastName: ''
    });

  getCheckInData$(): Observable<CheckInData> {
    return this.checkInData$.asObservable();
  }
  setCheckInData$(checkInData: CheckInData): void {
    this.checkInData$.next(checkInData);
  }

}
