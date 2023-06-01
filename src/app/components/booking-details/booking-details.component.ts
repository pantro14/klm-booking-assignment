import {Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {mergeMap, Observable, Subscription, switchMap} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {BookingNs} from '../../../graphql/namespace';
import {BookingFacadeService} from '../../services/facade/booking-facade.service';
import {LetDirective} from '@ngrx/component';
import {CardComponent} from '../../common/card/card.component';
import {FlightDetailsComponent} from '../flight-details/flight-details.component';
import {PassengerDetailsComponent} from '../passenger-details/passenger-details.component';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule, LetDirective, CardComponent, FlightDetailsComponent, PassengerDetailsComponent],
  templateUrl: './booking-details.component.html',
  styles: [
  ]
})
export class BookingDetailsComponent  implements OnInit {
  bookingDetails$: Observable<BookingNs.Booking>;

  constructor(
    private route: ActivatedRoute,
    private facade: BookingFacadeService
    ) { }
  ngOnInit() {
    this.bookingDetails$ = this.route.params
      .pipe(
        mergeMap((params) => {
          const bookingCode = params['bookingCode'];
          return this.facade.fetchBookingDetails$(bookingCode);
        })
      )
  }
}
