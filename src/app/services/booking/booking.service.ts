import { Injectable } from '@angular/core';
import {BookingNs} from '../../../graphql/namespace';
import {HttpClient} from '@angular/common/http';
import {Apollo} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {ApolloQueryResult, InMemoryCache} from '@apollo/client/core';
import {delay, Observable} from 'rxjs';
import {LoginCheckInGQL, LoginCheckInQueryResult} from '../../../graphql/auto-generated';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(readonly http: HttpClient, private apollo: Apollo) {
    if (!this.apollo.use('booking')) {
      const link = new HttpLink(http).create({
        uri: 'http://localhost:4000/graphql',
      });
      apollo.createNamed('booking', {
        cache: new InMemoryCache(),
        link,
      });
    }
  }

  validateLogin$(bookingCode: string, lastName: string): Observable<ApolloQueryResult<BookingNs.LoginCheckInQueryResult>> {
    return new BookingNs.LoginCheckInGQL(this.apollo).fetch({
      bookingCode,
      lastName
    });
  }

  fetchBookingDetails$(bookingCode: string): Observable<ApolloQueryResult<BookingNs.BookingDetailsQueryResult>> {
    return new BookingNs.BookingDetailsGQL(this.apollo).fetch({
      bookingCode,
    })
    // remove this comment if you want to see a beautiful shimmer of 5 second
    /*.pipe(
      delay(5000)
    );*/
  }
}
